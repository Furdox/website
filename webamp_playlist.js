const app = document.getElementById("webamp");
const webamp = new Webamp({
	initialTracks: [
		{
			metaData: {
				artist: "Andrew Gold/Ermelber",
				title: "Spooky Scary Skeletons",
			},
			url: "/files/music/Spooky_Scary_Skeletons.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: ",",
			},
			url: "/files/music/,.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "5122",
			},
			url: "/files/music/5122.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "Anxiety",
			},
			url: "/files/music/Anxiety.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "Artificial Sprouts",
			},
			url: "/files/music/Artificial_Sprouts.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "Ascension",
			},
			url: "/files/music/Ascension.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "Aurora",
			},
			url: "/files/music/Aurora.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "Catdelions",
			},
			url: "/files/music/Catdelions.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "Catdelions II",
			},
			url: "/files/music/Catdelions_II.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "Colorblind",
			},
			url: "/files/music/Colorblind.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "Dreamy Sunflower",
			},
			url: "/files/music/Dreamy_Sunflower.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "Exoplants",
			},
			url: "/files/music/Exoplants.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "Fruity Bounce",
			},
			url: "/files/music/Fruity_Bounce.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "Grow!",
			},
			url: "/files/music/Grow!.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "Happy Cakeday",
			},
			url: "/files/music/Happy_Cakeday.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "I Love You!!!",
			},
			url: "/files/music/I_Love_You!!!.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "Interstella",
			},
			url: "/files/music/Interstella.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "Jasmine Tea",
			},
			url: "/files/music/Jasmine_Tea.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "JUST KIDDING!!",
			},
			url: "/files/music/JUST_KIDDING!!.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "Metal Plate Petal Melta",
			},
			url: "/files/music/Metal_Plate_Petal_Melta.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "Midnight Drawing",
			},
			url: "/files/music/Midnight_Drawing.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "Midnight Honey",
			},
			url: "/files/music/Midnight_Honey.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "Mixed Berries",
			},
			url: "/files/music/Mixed_Berries.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "Moonflower",
			},
			url: "/files/music/Moonflower.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "Neitherbinary",
			},
			url: "/files/music/Neitherbinary.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "Nocturnal Photosynthesis",
			},
			url: "/files/music/Nocturnal_Photosynthesis.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "Nu15",
			},
			url: "/files/music/Nu15.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "Oxygen",
			},
			url: "/files/music/Oxygen.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "Pancake Pancake Pancake Pancake",
			},
			url: "/files/music/Pancake_Pancake_Pancake_Pancake.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "Pico",
			},
			url: "/files/music/Pico.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "Pistachio",
			},
			url: "/files/music/Pistachio.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "Pixel Florie",
			},
			url: "/files/music/Pixel_Florie.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "Spores",
			},
			url: "/files/music/Spores.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "SRLAOANOEETVLEEYDS",
			},
			url: "/files/music/SRLAOANOEETVLEEYDS.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "Starfruit Garden",
			},
			url: "/files/music/Starfruit_Garden.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "stem.cut",
			},
			url: "/files/music/stem.cut.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "Tomato",
			},
			url: "/files/music/Tomato.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "Tripetals",
			},
			url: "/files/music/Tripetals.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "Tulips",
			},
			url: "/files/music/Tulips.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "Vitaelek",
			},
			url: "/files/music/Vitaelek.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "WATA KASHI",
			},
			url: "/files/music/WATA_KASHI.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "Xilem",
			},
			url: "/files/music/Xilem.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "You Are My Star",
			},
			url: "/files/music/You_Are_My_Star.mp3",
		},
		{
			metaData: {
				artist: "Artifyber",
				title: "Zenith",
			},
			url: "/files/music/Zenith.mp3",
		},
		{
			metaData: {
				artist: "Asuka Ota/Ryo Nagamatsu/Yoshidude4",
				title: "Mushroom Gorge (Ass Mix)",
			},
			url: "/files/music/Mushroom_Gorge_(Ass_Mix).mp3",
		},
		{
			metaData: {
				artist: "Asuka Ota/Ryo Nagamatsu/Yoshimaster",
				title: "Coconut Mall",
			},
			url: "/files/music/Coconut_Mall.mp3",
		},
		{
			metaData: {
				artist: "Asuka Ota/Ryo Nagamatsu/Yoshimaster",
				title: "Koopa Cape",
			},
			url: "/files/music/Koopa_Cape.mp3",
		},
		{
			metaData: {
				artist: "Asuka Ota/Ryo Nagamatsu/Yoshimaster",
				title: "Maple Treeway",
			},
			url: "/files/music/Maple_Treeway.mp3",
		},
		{
			metaData: {
				artist: "Asuka Ota/Ryo Nagamatsu/Yoshimaster",
				title: "Moonview Highway",
			},
			url: "/files/music/Moonview_Highway.mp3",
		},
		{
			metaData: {
				artist: "Asuka Ota/Ryo Nagamatsu/Yoshimaster",
				title: "Nintendo WFC Menu (Course Select)",
			},
			url: "/files/music/Nintendo_WFC_Menu_(Course_Select).mp3",
		},
		{
			metaData: {
				artist: "Asuka Ota/Ryo Nagamatsu/Yoshimaster",
				title: "Rainbow Road (Mario Kart Wii)",
			},
			url: "/files/music/Rainbow_Road_(Mario_Kart_Wii).mp3",
		},
		{
			metaData: {
				artist: "Avicii",
				title: "Levels - Skrillex Remix",
			},
			url: "/files/music/Levels_-_Skrillex_Remix.mp3",
		},
		{
			metaData: {
				artist: "D4C",
				title: "AFTER NIGHT",
			},
			url: "/files/music/AFTER_NIGHT.mp3",
		},
		{
			metaData: {
				artist: "D4C",
				title: "BED TIME",
			},
			url: "/files/music/BED_TIME.mp3",
		},
		{
			metaData: {
				artist: "D4C",
				title: "LOVE DELUXE",
			},
			url: "/files/music/LOVE_DELUXE.mp3",
		},
		{
			metaData: {
				artist: "D4C",
				title: "ORDEM PARA MATAR",
			},
			url: "/files/music/ORDEM_PARA_MATAR.mp3",
		},
		{
			metaData: {
				artist: "Daisuke Shiiba/Asuka Ito/Riyu Tamura/Yoshidude4",
				title: "The Island at Noon",
			},
			url: "/files/music/The_Island_at_Noon.mp3",
		},
		{
			metaData: {
				artist: "Darude/stomatol",
				title: "Sandstorm (Stomatol Mix)",
			},
			url: "/files/music/Sandstorm_(Stomatol_Mix).mp3",
		},
		{
			metaData: {
				artist: "Darude/stomatol/Yoshidude4",
				title: "Sandstorm",
			},
			url: "/files/music/Sandstorm.mp3",
		},
		{
			metaData: {
				artist: "David Wise/Yoshimaster",
				title: "Ancient Lake",
			},
			url: "/files/music/Ancient_Lake.mp3",
		},
		{
			metaData: {
				artist: "David Wise/Yoshimaster",
				title: "Crescent Island",
			},
			url: "/files/music/Crescent_Island.mp3",
		},
		{
			metaData: {
				artist: "Deaf Kev",
				title: "Invincible",
			},
			url: "/files/music/Invincible.mp3",
		},
		{
			metaData: {
				artist: "Evanescence",
				title: "Bring Me To Life",
			},
			url: "/files/music/Bring_Me_To_Life.mp3",
		},
		{
			metaData: {
				artist: "Exyl",
				title: "No Way Back",
			},
			url: "/files/music/No_Way_Back.mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "ACT RIGHT",
			},
			url: "/files/music/ACT_RIGHT.mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "ACT RIGHT",
			},
			url: "/files/music/ACT_RIGHT_(1).mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "ACT RIGHT",
			},
			url: "/files/music/ACT_RIGHT_(2).mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "AND I'M GONE",
			},
			url: "/files/music/AND_I'M_GONE_(2).mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "AND I'M GONE",
			},
			url: "/files/music/AND_I'M_GONE_(1).mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "AND I'M GONE",
			},
			url: "/files/music/AND_I'M_GONE.mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "DINNER!",
			},
			url: "/files/music/DINNER!.mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "DINNER!",
			},
			url: "/files/music/DINNER!_(1).mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "DINNER!",
			},
			url: "/files/music/DINNER!_(2).mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "DOGMATICA",
			},
			url: "/files/music/DOGMATICA.mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "DOGMATICA",
			},
			url: "/files/music/DOGMATICA_(2).mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "DOGMATICA",
			},
			url: "/files/music/DOGMATICA_(1).mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "GIRL HELL 1999",
			},
			url: "/files/music/GIRL_HELL_1999.mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "GIRL HELL 1999",
			},
			url: "/files/music/GIRL_HELL_1999_(1).mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "GIRL HELL 1999",
			},
			url: "/files/music/GIRL_HELL_1999_(2).mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "I MIGHT B3 SICK",
			},
			url: "/files/music/I_MIGHT_B3_SICK.mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "I MIGHT B3 SICK",
			},
			url: "/files/music/I_MIGHT_B3_SICK_(2).mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "I MIGHT B3 SICK",
			},
			url: "/files/music/I_MIGHT_B3_SICK_(1).mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "KATAMARI",
			},
			url: "/files/music/KATAMARI.mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "KATAMARI",
			},
			url: "/files/music/KATAMARI_(1).mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "KATAMARI",
			},
			url: "/files/music/KATAMARI_(2).mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "LOVESICK, CANNIBAL!",
			},
			url: "/files/music/LOVESICK,_CANNIBAL!_(1).mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "LOVESICK, CANNIBAL!",
			},
			url: "/files/music/LOVESICK,_CANNIBAL!.mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "LOVESICK, CANNIBAL!",
			},
			url: "/files/music/LOVESICK,_CANNIBAL!_(2).mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "MURDER EVERY 1 U KNOW!",
			},
			url: "/files/music/MURDER_EVERY_1_U_KNOW!.mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "MURDER EVERY 1 U KNOW!",
			},
			url: "/files/music/MURDER_EVERY_1_U_KNOW!_(1).mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "MURDER EVERY 1 U KNOW!",
			},
			url: "/files/music/MURDER_EVERY_1_U_KNOW!_(2).mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "P3T",
			},
			url: "/files/music/P3T.mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "P3T",
			},
			url: "/files/music/P3T_(1).mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "P3T",
			},
			url: "/files/music/P3T_(2).mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "PUSH UR T3MPRR",
			},
			url: "/files/music/PUSH_UR_T3MPRR.mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "PUSH UR T3MPRR",
			},
			url: "/files/music/PUSH_UR_T3MPRR_(1).mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "PUSH UR T3MPRR",
			},
			url: "/files/music/PUSH_UR_T3MPRR_(2).mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "S33K H3LP",
			},
			url: "/files/music/S33K_H3LP_(2).mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "S33K H3LP",
			},
			url: "/files/music/S33K_H3LP_(1).mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "S33K H3LP",
			},
			url: "/files/music/S33K_H3LP.mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "WEIGHTLESS!",
			},
			url: "/files/music/WEIGHTLESS!.mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "WEIGHTLESS!",
			},
			url: "/files/music/WEIGHTLESS!_(2).mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "WEIGHTLESS!",
			},
			url: "/files/music/WEIGHTLESS!_(1).mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "Worldwid3",
			},
			url: "/files/music/Worldwid3.mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "Worldwid3",
			},
			url: "/files/music/Worldwid3_(1).mp3",
		},
		{
			metaData: {
				artist: "femtanyl",
				title: "Worldwid3",
			},
			url: "/files/music/Worldwid3_(2).mp3",
		},
		{
			metaData: {
				artist: "g3ox_em",
				title: "GigaChad Theme - Phonk House Version",
			},
			url: "/files/music/GigaChad_Theme_-_Phonk_House_Version.mp3",
		},
		{
			metaData: {
				artist: "Hirokazu Ando/Shogo Sakai/Tadashi Ikegami/Takuto Kitsuta/stomatol",
				title: "Break the Targets!",
			},
			url: "/files/music/Break_the_Targets!.mp3",
		},
		{
			metaData: {
				artist: "IDK/Yoshidude4",
				title: "Erlluminatii Confirmed",
			},
			url: "/files/music/Erlluminatii_Confirmed.mp3",
		},
		{
			metaData: {
				artist: "Junichi Nakatsuru/NintendoFan214/Yoshidude4",
				title: "Main Theme ~ Piano Ver. (Super Smash Bros. for Nintendo 3DS and Wii U)",
			},
			url: "/files/music/Main_Theme_~_Piano_Ver._(Super_Smash_Bros._for_Nintendo_3DS_and_Wii_U).mp3",
		},
		{
			metaData: {
				artist: "Kazumi Totaka/Teck/Yoshidude4",
				title: "Athletic (Super Mario Land 2: 6 Golden Coins)",
			},
			url: "/files/music/Athletic_(Super_Mario_Land_2-_6_Golden_Coins).mp3",
		},
		{
			metaData: {
				artist: "Kenichi Nishimaki/Masanobu Matsunaga/Minako Hamano/Yoshimaster",
				title: "Bowser Castle (Mario Kart: Super Circuit - EKDS Mix)",
			},
			url: "/files/music/Bowser_Castle_(Mario_Kart-_Super_Circuit_-_EKDS_Mix).mp3",
		},
		{
			metaData: {
				artist: "Kenichi Nishimaki/Masanobu Matsunaga/Minako Hamano/Yoshimaster",
				title: "Snow Land (EKDS Mix)",
			},
			url: "/files/music/Snow_Land_(EKDS_Mix).mp3",
		},
		{
			metaData: {
				artist: "Kenta Nagata/Ermelber",
				title: "Kalimari Desert",
			},
			url: "/files/music/Kalimari_Desert.mp3",
		},
		{
			metaData: {
				artist: "Kenta Nagata/Satomi Terui/Yoshimaster",
				title: "Alpine Pass / Rock Rock Mountain",
			},
			url: "/files/music/Alpine_Pass_-_Rock_Rock_Mountain.mp3",
		},
		{
			metaData: {
				artist: "Kenta Nagata/Satomi Terui/Yoshimaster",
				title: "Koopa City / Neo Bowser City",
			},
			url: "/files/music/Koopa_City_-_Neo_Bowser_City.mp3",
		},
		{
			metaData: {
				artist: "Kenta Nagata/Satomi Terui/Yoshimaster",
				title: "Rainbow Road (Mario Kart 7)",
			},
			url: "/files/music/Rainbow_Road_(Mario_Kart_7).mp3",
		},
		{
			metaData: {
				artist: "Kenta Nagata/Yoshidude4",
				title: "Rainbow Road (Mario Kart 64)",
			},
			url: "/files/music/Rainbow_Road_(Mario_Kart_64).mp3",
		},
		{
			metaData: {
				artist: "Kenta Nagata/Yoshimaster",
				title: "Raceway Theme",
			},
			url: "/files/music/Raceway_Theme.mp3",
		},
		{
			metaData: {
				artist: "Koji Kondo/Asuka Ota/Ermelber",
				title: "Map Select Medley (Beta 1 Mix)",
			},
			url: "/files/music/Map_Select_Medley_(Beta_1_Mix).mp3",
		},
		{
			metaData: {
				artist: "Koji Kondo/Asuka Ota/Yoshimaster",
				title: "Map Select Medley (EKDS Mix)",
			},
			url: "/files/music/Map_Select_Medley_(EKDS_Mix).mp3",
		},
		{
			metaData: {
				artist: "Koji Kondo/Jamie Allen/Yoshidude4",
				title: "Ground Theme (Super Mario Bros. - Remix)",
			},
			url: "/files/music/Ground_Theme_(Super_Mario_Bros._-_Remix).mp3",
		},
		{
			metaData: {
				artist: "Kordhell",
				title: "Murder In My Mind",
			},
			url: "/files/music/Murder_In_My_Mind.mp3",
		},
		{
			metaData: {
				artist: "Mario Galaxy Orchestra/Govoni Dario/Szymbar15",
				title: "Good Egg Galaxy",
			},
			url: "/files/music/Good_Egg_Galaxy.mp3",
		},
		{
			metaData: {
				artist: "Masakazu Sugimori/Szymbar15",
				title: "4 Minutes Before Death (Variation)",
			},
			url: "/files/music/4_Minutes_Before_Death_(Variation).mp3",
		},
		{
			metaData: {
				artist: "Max Coveri/Ermelber",
				title: "Running in the 90s",
			},
			url: "/files/music/Running_in_the_90s.mp3",
		},
		{
			metaData: {
				artist: "Metaroom",
				title: "S.N.U.F.F.Y",
			},
			url: "/files/music/S.N.U.F.F.Y.mp3",
		},
		{
			metaData: {
				artist: "mintpaws",
				title: "MINT RAVE",
			},
			url: "/files/music/MINT_RAVE_(1).mp3",
		},
		{
			metaData: {
				artist: "mintpaws",
				title: "MINT RAVE",
			},
			url: "/files/music/MINT_RAVE.mp3",
		},
		{
			metaData: {
				artist: "mintpaws",
				title: "MINT RAVE",
			},
			url: "/files/music/MINT_RAVE_(2).mp3",
		},
		{
			metaData: {
				artist: "mintpaws",
				title: "MINT RAVE",
			},
			url: "/files/music/MINT_RAVE_(3).mp3",
		},
		{
			metaData: {
				artist: "MoonDeity",
				title: "BLADE RUNNER",
			},
			url: "/files/music/BLADE_RUNNER.mp3",
		},
		{
			metaData: {
				artist: "MoonDeity",
				title: "DANSE MACABRE",
			},
			url: "/files/music/DANSE_MACABRE.mp3",
		},
		{
			metaData: {
				artist: "MoonDeity",
				title: "DRIVE",
			},
			url: "/files/music/DRIVE.mp3",
		},
		{
			metaData: {
				artist: "MoonDeity",
				title: "NEON BLADE",
			},
			url: "/files/music/NEON_BLADE.mp3",
		},
		{
			metaData: {
				artist: "MoonDeity",
				title: "One Chance",
			},
			url: "/files/music/One_Chance.mp3",
		},
		{
			metaData: {
				artist: "MoonDeity",
				title: "WAKE UP!",
			},
			url: "/files/music/WAKE_UP!.mp3",
		},
		{
			metaData: {
				artist: "Naoto Tanaka/Ermelber",
				title: "Reminiscence ~ Steel Samurai's Ballad",
			},
			url: "/files/music/Reminiscence_~_Steel_Samurai's_Ballad.mp3",
		},
		{
			metaData: {
				artist: "Naoto Tanaka/Yoshidude4",
				title: "Pursuit ~ Cornered",
			},
			url: "/files/music/Pursuit_~_Cornered.mp3",
		},
		{
			metaData: {
				artist: "Niko/Ermelber",
				title: "Night of Fire",
			},
			url: "/files/music/Night_of_Fire.mp3",
		},
		{
			metaData: {
				artist: "Noriyuki Iwadare/Ermelber",
				title: "Pursuit ~ Lying Coldly (Variation)",
			},
			url: "/files/music/Pursuit_~_Lying_Coldly_(Variation).mp3",
		},
		{
			metaData: {
				artist: "Noriyuki Iwadare/Yoshidude4/Ermelber",
				title: "Pursuit ~ Lying Grandly",
			},
			url: "/files/music/Pursuit_~_Lying_Grandly.mp3",
		},
		{
			metaData: {
				artist: "PHNKR",
				title: "Pentagramma",
			},
			url: "/files/music/Pentagramma.mp3",
		},
		{
			metaData: {
				artist: "PlayaPhonk",
				title: "PHONKY TOWN",
			},
			url: "/files/music/PHONKY_TOWN.mp3",
		},
		{
			metaData: {
				artist: "Qumu",
				title: "E. Gadds Lab (From Luigis Mansion)",
			},
			url: "/files/music/E._Gadds_Lab_(From_Luigis_Mansion).mp3",
		},
		{
			metaData: {
				artist: "Qumu",
				title: "Ghost House (From Super Mario World)",
			},
			url: "/files/music/Ghost_House_(From_Super_Mario_World).mp3",
		},
		{
			metaData: {
				artist: "Raccy",
				title: "Level Up",
			},
			url: "/files/music/Level_Up.mp3",
		},
		{
			metaData: {
				artist: "Rick Astley/Ermelber",
				title: "Never Gonna Give You Up",
			},
			url: "/files/music/Never_Gonna_Give_You_Up.mp3",
		},
		{
			metaData: {
				artist: "RXDXVIL",
				title: "ANGRY BIRDS PHONK",
			},
			url: "/files/music/ANGRY_BIRDS_PHONK.mp3",
		},
		{
			metaData: {
				artist: "Satoru Kosaki/Ermelber",
				title: "Mikuru Legend of Love",
			},
			url: "/files/music/Mikuru_Legend_of_Love.mp3",
		},
		{
			metaData: {
				artist: "Shiho Fujii/Atsuko Asahi/Ryo Nagamatsu/Yasuaki Iwata/Alan Ramirez/Yoshidude4",
				title: "Shy Guy Falls",
			},
			url: "/files/music/Shy_Guy_Falls.mp3",
		},
		{
			metaData: {
				artist: "Shiho Fujii/Atsuko Asahi/Ryo Nagamatsu/Yasuaki Iwata/Yoshimaster",
				title: "Animal Crossing (Autumn)",
			},
			url: "/files/music/Animal_Crossing_(Autumn).mp3",
		},
		{
			metaData: {
				artist: "Shiho Fujii/Atsuko Asahi/Ryo Nagamatsu/Yasuaki Iwata/Yoshimaster",
				title: "Animal Crossing (Spring)",
			},
			url: "/files/music/Animal_Crossing_(Spring).mp3",
		},
		{
			metaData: {
				artist: "Shiho Fujii/Atsuko Asahi/Ryo Nagamatsu/Yasuaki Iwata/Yoshimaster",
				title: "Animal Crossing (Summer)",
			},
			url: "/files/music/Animal_Crossing_(Summer).mp3",
		},
		{
			metaData: {
				artist: "Shiho Fujii/Atsuko Asahi/Ryo Nagamatsu/Yasuaki Iwata/Yoshimaster",
				title: "Animal Crossing (Winter)",
			},
			url: "/files/music/Animal_Crossing_(Winter).mp3",
		},
		{
			metaData: {
				artist: "Shiho Fujii/Atsuko Asahi/Ryo Nagamatsu/Yasuaki Iwata/Yoshimaster",
				title: "SNES Rainbow Road (Mario Kart 8 - Legacy Edition Mix)",
			},
			url: "/files/music/SNES_Rainbow_Road_(Mario_Kart_8_-_Legacy_Edition_Mix).mp3",
		},
		{
			metaData: {
				artist: "Shiho Fujii/Atsuko Asahi/Ryo Nagamatsu/Yasuaki Iwata/Yoshimaster",
				title: "SNES Rainbow Road (Mario Kart 8)",
			},
			url: "/files/music/SNES_Rainbow_Road_(Mario_Kart_8).mp3",
		},
		{
			metaData: {
				artist: "Shiho Fujii/Atsuko Asahi/Ryo Nagamatsu/Yasuaki Iwata/Yoshimaster",
				title: "Urchin Underpass",
			},
			url: "/files/music/Urchin_Underpass.mp3",
		},
		{
			metaData: {
				artist: "Shiho Fujii/Atsuko Asahi/Ryo Nagamatsu/Yasuaki Iwata/Yoshimaster/Ermelber",
				title: "Hyrule Circuit",
			},
			url: "/files/music/Hyrule_Circuit.mp3",
		},
		{
			metaData: {
				artist: "Shiho Fujii/Atsuko Asahi/Ryo Nagamatsu/Yasuaki Iwata/Yoshimaster/Yoshidude4",
				title: "N64 Rainbow Road (Mario Kart 8)",
			},
			url: "/files/music/N64_Rainbow_Road_(Mario_Kart_8).mp3",
		},
		{
			metaData: {
				artist: "Shinobu Tanaka/Kenta Nagata/Yoshimaster",
				title: "Peach Beach",
			},
			url: "/files/music/Peach_Beach.mp3",
		},
		{
			metaData: {
				artist: "Shinobu Tanaka/Kenta Nagata/Yoshimaster",
				title: "Rainbow Road (Mario Kart: Double Dash!!)",
			},
			url: "/files/music/Rainbow_Road_(Mario_Kart-_Double_Dash!!).mp3",
		},
		{
			metaData: {
				artist: "Shinobu Tanaka/Kenta Nagata/Yoshimaster",
				title: "Waluigi Stadium and Wario Colosseum",
			},
			url: "/files/music/Waluigi_Stadium_and_Wario_Colosseum.mp3",
		},
		{
			metaData: {
				artist: "Shinobu Tanaka/Yoshidude4",
				title: "SEQ_CIRCUIT2",
			},
			url: "/files/music/SEQ_CIRCUIT2.mp3",
		},
		{
			metaData: {
				artist: "Skrillex",
				title: "Bangarang (feat. Sirah)",
			},
			url: "/files/music/Bangarang_(feat._Sirah).mp3",
		},
		{
			metaData: {
				artist: "Skrillex",
				title: "Rock 'n' Roll (Will Take You to the Mountain)",
			},
			url: "/files/music/Rock_'n'_Roll_(Will_Take_You_to_the_Mountain).mp3",
		},
		{
			metaData: {
				artist: "Skrillex",
				title: "Scary Monsters and Nice Sprites",
			},
			url: "/files/music/Scary_Monsters_and_Nice_Sprites.mp3",
		},
		{
			metaData: {
				artist: "Smash Mouth/Yoshidude4",
				title: "All Star",
			},
			url: "/files/music/All_Star.mp3",
		},
		{
			metaData: {
				artist: "Snail's House",
				title: "Hot Milk",
			},
			url: "/files/music/Hot_Milk.mp3",
		},
		{
			metaData: {
				artist: "Soyo Oka/Blue Warrior/Ermelber",
				title: "Rainbow Road (Super Mario Kart - Remix)",
			},
			url: "/files/music/Rainbow_Road_(Super_Mario_Kart_-_Remix).mp3",
		},
		{
			metaData: {
				artist: "Soyo Oka/Yoshidude4",
				title: "Vanilla Lake",
			},
			url: "/files/music/Vanilla_Lake.mp3",
		},
		{
			metaData: {
				artist: "Soyo Oka/Yoshimaster",
				title: "Bowser Castle (Super Mario Kart - EKDS Mix)",
			},
			url: "/files/music/Bowser_Castle_(Super_Mario_Kart_-_EKDS_Mix).mp3",
		},
		{
			metaData: {
				artist: "Soyo Oka/Yoshimaster",
				title: "Ghost Valley",
			},
			url: "/files/music/Ghost_Valley.mp3",
		},
		{
			metaData: {
				artist: "Takeshi Watanabe/TomixNscale89/Yoshidude4",
				title: "Bin no kyappu",
			},
			url: "/files/music/Bin_no_kyappu.mp3",
		},
		{
			metaData: {
				artist: "The Living Tombstone",
				title: "Five Nights at Freddy's",
			},
			url: "/files/music/Five_Nights_at_Freddy's.mp3",
		},
		{
			metaData: {
				artist: "Toru Minegishi/Shiho Fujii/Ryo Nagamatsu/Yoshidude4",
				title: "Splattack!",
			},
			url: "/files/music/Splattack!.mp3",
		},
		{
			metaData: {
				artist: "Toru Minegishi/Stacy Anne Christiansen/Yoshidude4",
				title: "Go K.K. Rider (Remix)",
			},
			url: "/files/music/Go_K.K._Rider_(Remix).mp3",
		},
		{
			metaData: {
				artist: "Yoshidude4",
				title: "Stone Age Online",
			},
			url: "/files/music/Stone_Age_Online.mp3",
		},
		{
			metaData: {
				artist: "Yuki Kajiura/MyReminiscence: Aoryn/Ermelber",
				title: "Luminous Sword ~ Piano Ver.",
			},
			url: "/files/music/Luminous_Sword_~_Piano_Ver..mp3",
		},
		{
			metaData: {
				artist: "Yumiko Kanki/Naoto Ishida/Yoshidude4",
				title: "Ending Theme ~ Ver. 1",
			},
			url: "/files/music/Ending_Theme_~_Ver._1.mp3",
		},
		{
			metaData: {
				artist: "Yumiko Kanki/Naoto Ishida/Yoshidude4",
				title: "Ending Theme ~ Ver. 2",
			},
			url: "/files/music/Ending_Theme_~_Ver._2.mp3",
		},
		{
			metaData: {
				artist: "ZWE1HVNDXR",
				title: "LOVELY BASTARDS",
			},
			url: "/files/music/LOVELY_BASTARDS.mp3",
		},
	],
});

webamp.renderWhenReady(app);