import os
import re
from mutagen.easyid3 import EasyID3

def sanitize_filename(filename):
    """Remove spaces from the filename for compatibility."""
    return re.sub(r'\s+', '_', filename)

def scan_and_generate_playlist(directory):
    playlist = []
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".mp3"):
                # Sanitize file name
                sanitized_name = sanitize_filename(file)
                old_path = os.path.join(root, file)
                new_path = os.path.join(root, sanitized_name)
                os.rename(old_path, new_path)
                
                # Load metadata
                metadata = {}
                try:
                    audio = EasyID3(new_path)
                    title = audio.get('title', [None])[0]
                    artist = audio.get('artist', [None])[0]
                    
                    if title:
                        metadata['title'] = title
                    if artist:
                        metadata['artist'] = artist
                except Exception as e:
                    print(f"Error processing {sanitized_name}: {e}")
                
                # Generate playlist entry
                playlist_entry = {
                    "url": f"/files/music/{sanitized_name}",
                }
                if metadata:
                    playlist_entry["metaData"] = metadata

                playlist.append(playlist_entry)

    return playlist

def generate_js(playlist):
    """Generate the JavaScript code for the Webamp playlist."""
    js_code = 'const app = document.getElementById("webamp");\n'
    js_code += 'const webamp = new Webamp({\n'
    js_code += '\tinitialTracks: [\n'
    
    for track in playlist:
        js_code += '\t\t{\n'
        if 'metaData' in track:
            js_code += '\t\t\tmetaData: {\n'
            if 'artist' in track['metaData']:
                js_code += f'\t\t\t\tartist: "{track["metaData"]["artist"]}",\n'
            if 'title' in track['metaData']:
                js_code += f'\t\t\t\ttitle: "{track["metaData"]["title"]}",\n'
            js_code += '\t\t\t},\n'
        js_code += f'\t\t\turl: "{track["url"]}",\n'
        js_code += '\t\t},\n'
    
    js_code += '\t],\n});\n\n'
    js_code += 'webamp.renderWhenReady(app);'
    
    return js_code

# Directory containing the MP3 files
music_directory = "/home/furdox/Music/foobar2000convert"

# Scan directory and generate playlist
playlist = scan_and_generate_playlist(music_directory)

# Generate JavaScript code
js_code = generate_js(playlist)

# Save the JavaScript code to a file or print it
with open("webamp_playlist.js", "w") as js_file:
    js_file.write(js_code)

print("JavaScript playlist code generated successfully!")
