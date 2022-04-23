var storyContent = ﻿{"inkVersion":19,"root":[[{"#":"Character: Raithe Kole"},{"#":"Updated 04-11-2021 @ 12:05 AM ET"},{"#":"theme: dark"},{"#":"author: Disney.<br>all rights reserved."},{"#":"status: in-development"},{"->":"start_raithe_kole"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"raithe_debug":[["ev","str","^engineering_task","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^ill_help_you (locked)","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^ill_help_you (unlocked)","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^at_ship_console","/str","/ev",{"*":".^.c-3","flg":20},"ev","str","^Start","/str","/ev",{"*":".^.c-4","flg":20},{"c-0":["^ ",{"->":"engineering_task"},"\n",{"#f":5}],"c-1":["\n",{"->":"ill_help_you"},{"#f":5}],"c-2":["\n","ev",1,"/ev",{"VAR=":"eng_room_unlocked","re":true},{"->":"ill_help_you"},{"#f":5}],"c-3":["\n","ev",1,"/ev",{"VAR=":"eng_room_unlocked","re":true},{"->":"at_ship_console"},{"#f":5}],"c-4":["^ ",{"->":"start_raithe_kole"},"\n",{"#f":5}]}],{"#f":1}],"start_raithe_kole":[["^<div class=\"player-header\">You</div>","\n","ev","str","^<em>Use your M-Band on the Engineering Room door</em>","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^<em>Tap 'Restricted Systems' on a Ship Console<em>","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^<div class=\"progression\">You tap your M-Band on the door lock.</div>","\n","^<div class=\"character-header\">Raithe Kole</div>","\n","^So...a little convor tells me you're trying to get into the Engineering Room?","\n","^The Engineering Room is for crew only...","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["\n","^<div class=\"progression\"> You try to access 'Restricted Systems' on  a Ship Console.</div>","\n","^<div class=\"character-header\">Raithe Kole</div>","\n","^Ooh, a curious convor, are we?","\n","^Exploring Restricted Systems already...","\n","^Those are for Halcyon crew only.","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^However, I respect your sense of curiosity and disregard for the rules.","\n","^...I'm not Halcyon crew either.","\n","^<div class=\"player-header\">You</div>","\n","ev","str","^Who are you?","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^I'll help you if you help me...","/str","/ev",{"*":".^.c-3","flg":20},"ev","str","^Do you know how to get in?","/str","/ev",{"*":".^.c-4","flg":20},{"c-2":["^ ",{"->":"who_are_you"},"\n",{"#f":5}],"c-3":["^ ",{"->":"ill_help_you"},"\n",{"#f":5}],"c-4":["^ ",{"->":"how_to_get_in"},"\n",{"#f":5}],"#f":5}]}],{"#f":1}],"who_are_you":[["^<div class=\"player-answer\">Who are you?</div>","\n","^<div class=\"character-header\">Raithe Kole</div>","\n","^I'm someone who is always on the lookout for potential recruits for my crew.","\n","^It's a lucrative busness, though not always...above board, if you catch my drift.","\n","^<div class=\"player-header\">You</div>","\n","ev","str","^Do you know how to get into Restricted Systems?","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"how_to_get_in"},{"#f":5}]}],{"#f":1}],"how_to_get_in":[["^<div class=\"player-answer\">Do you know how to get in?</div>","\n","^<div class=\"character-header\">Raithe Kole</div>","\n","^It just so happens I do know how to get into some restricted areas of the ship....","\n","^However, I have many hands of sabacc going at the same time – so I'm needed elsewhere...","\n","^You, however, are clearly ready to be dealt in – so maybe you can fly under the radar and get us access to the Engineering Room and Restricted Systems.","\n","^You never know how they'll come in handy.","\n","^<div class=\"player-header\">You</div>","\n","ev","str","^Why do you need access?","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^I'll help you if you help me...","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":"why_need_access"},{"#f":5}],"c-1":["\n",{"->":"ill_help_you"},{"#f":5}]}],{"#f":1}],"why_need_access":[["^<div class=\"player-answer\">Why do you need access?</div>","\n","^<div class=\"character-header\">Raithe Kole</div>","\n","^I have my reasons as I'm sure you have yours.","\n","^But I've got my eye on you – maybe you'll prove useful for...future endeavours.","\n","^<div class=\"player-header\">You</div>","\n","ev","str","^I'll help you if you help me...","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"ill_help_you"},{"#f":5}]}],{"#f":1}],"ill_help_you":[["^<div class=\"player-answer\">I'll help you if you help me...</div>","\n","^<div class=\"character-header\">Raithe Kole</div>","\n","^Ah, I like you. That's the spirit. Let's get to it, shall we?","\n","ev",{"VAR?":"eng_room_unlocked"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",{"->":"have_engineering_access"},{"->":".^.^.^.12"},null]}],"nop","\n","^You'll need to find a ship console. I've noticed a few of them around the starcruiser.","\n","^They look like this:","\n","^<img src=\"./images/ship-console.png\" />","\n","^Find one and let me know when you're near.","\n","^<div class=\"player-header\">You</div>","\n","ev","str","^Where can I find one?","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^I'm at a ship console.","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":"where_can_find_console"},{"#f":5}],"c-1":["\n",{"->":"at_ship_console"},{"#f":5}]}],{"#f":1}],"have_engineering_access":["^<div class=\"character-header\">Raithe Kole</div>","\n","^I see you have engineering access, I wonder if you would help me with something?","\n",{"->":"engineering_task"},{"#f":1}],"where_can_find_console":[["^<div class=\"player-answer\">Where can I find one?</div>","\n","^<div class=\"character-header\">Raithe Kole</div>","\n","^Depends on where you are.","\n","^In scoping out the ship, I've found a few in the Atrium on Deck 6, one on the concourse of Deck 4, and one at each of the Cabin hallways near the turbolifts.","\n","^Head to whatever's nearest to you!","\n","^<div class=\"player-header\">You</div>","\n","ev","str","^I'm at a ship console.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"at_ship_console"},{"#f":5}]}],{"#f":1}],"at_ship_console":[["^<div class=\"player-answer\">I'm at a ship console.</div>","\n","^<div class=\"character-header\">Raithe Kole</div>","\n","^Great. You'll want to stand near the ship console for this – but not too close.","\n","^I'll enable your Hack tool – connect the inputs and outputs it shows you on your Datapad to slice the ship console.","\n","^<div class=\"button\"><a href=\"\" class=\"button-text\">VIEW TRANSCRIPT</a></div>","\n","ev",{"VAR?":"eng_room_unlocked"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",{"->":"have_engineering_access"},{"->":".^.^.^.16"},null]}],"nop","\n","^<div class=\"player-header\">You</div>","\n","ev","str","^<em>I have the credential code.</em>","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^<em>I've already put the credential code in the console.</em>","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":"hack_console"},{"#f":5}],"c-1":["\n",{"->":"engineering_task"},{"#f":5}]}],{"#f":1}],"hack_console":[["^<div class=\"character-header\">Raithe Kole</div>","\n","^Ah, you got the credential code.","\n","^Now press the \"RESTRICTED SYSTEMS\" button or tap your M-Band at the ship console.","\n","^Enter the code when prompted and let's see if it works.","\n","^<img src=\"./images/ship-console.png\" />","\n","^<div class=\"player-header\">You</div>","\n","ev","str","^<em>Enter the credential code in the ship console</em>","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"youre_in"},{"#f":5}]}],{"#f":1}],"youre_in":["ev",1,"/ev",{"VAR=":"console_unlocked","re":true},"^<div class=\"character-header\">Raithe Kole</div>","\n","^Alright, you're in.","\n","^You should have access to that restricted Engineering room now.","\n","^Way to make a first impression.","\n","^Actually...I need your help with something.","\n","^Head to the Engineering room and act like you belong there.","\n",{"->":"engineering_task"},{"#f":1}],"engineering_task":[["ev","visit",2,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop",{"->":"engineering_task_1"},{"->":".^.^.17"},null],"s1":["pop","^ ",{"->":"engineering_task_2"},{"->":".^.^.17"},null],"#f":5}],"\n",{"#f":1}],"engineering_task_1":["^<div class=\"character-header\">Raithe Kole</div>","\n","^I need to make sure Gaya has a way off of this ship if she needs a sudden geteway.","\n","^I want to prepare an escape pod and make sure it's up to her standards – just in case.","\n","^Find the Mechanical Systems station.","\n","^On that panel, find a way to prime the Escape Pod thrusters so we're sure it's ready to go.","\n",{"->":"engineering_task_ending"},{"#f":1}],"engineering_task_2":["^<div class=\"character-header\">Raithe Kole</div>","\n","^Here's the deal – Gaya's communications must stay private.","\n","^We need a secure comms channel set up.","\n","^I need you to find the Systems Patch Bay.","\n","^On that system panel, find a way to calibrate the primary sensor array.","\n",{"->":"engineering_task_ending"},{"#f":1}],"engineering_task_ending":[["^<div class=\"character-header\">Raithe Kole</div>","\n","^Once that's done, play it cool and don't draw too much attention to yourself.","\n","^I trust you've got it covered.","\n","^<div class=\"transmission\">/// TRANSMISSION ENDED \\\\\\</div>","\n","ev","str","^<em>Complete engineering task</em>","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"engineering_task_done"},{"#f":5}]}],{"#f":1}],"engineering_task_done":[["^<div class=\"character-header\">Raithe Kole</div>","\n","^I see you're following through. Nicely done.","\n","^Next time you see me, mention that you've seen \"Gaya's legendary performance on Ryloth\" – that way I'll know it's you.","\n","^We'll keep in touch.","\n","ev","str","^<em>Raithe and I had a chat in person.</em>","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^<em>I haven't seen Raithe.</em>","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":"chat_in_person"},{"#f":5}],"c-1":["\n","^The next day...","\n",{"->":"we_have_plans"},{"#f":5}]}],{"#f":1}],"chat_in_person":[["^<div class=\"character-header\">Raithe Kole</div>","\n","^Per usual, Gaya delivered – coordinates to a First Order coaxium transport. This data seals the deal Gaya made with the Captain.","\n","ev","str","^You're helping the Captain?","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^<div class=\"player-answer\">You're helping the Captain?</div>","\n","^For Gaya, it's not about the Captain or the Resistance. Gaya's home planet of Ryloth is at risk...the First Order is a threat to her people, and if we help the Resistance, they've agreed to help protect Ryloth if the First Order threatens it again.","\n",["ev","str","^What do you need me to do?","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^<div class=\"player-answer\">What do you need me to do?</div>","\n","^<div class=\"character-header\">Raithe Kole</div>","\n","^Gaya slipped me the coordinates for the coaxium transport on Corellia, right under the Lieutenant's nose.","\n","^I think I can trust you...are you interested in joining our crew?","\n",["ev","str","^Yeah, I'll join your crew!","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^<div class=\"player-answer\">Yeah, I'll join your crew!</div>","\n","^I like your style. You're in.","\n","^Keep an eye out. Gaya's calling – I'll be in touch.","\n",{"->":".^.^.^.^.^.^.g-0"},{"#f":5}]}],{"#f":5}]}],{"#f":5}],"g-0":["ev","str","^<em>Later that evening..</em>","/str","/ev",{"*":".^.c-1","flg":20},{"c-1":["\n",{"->":"we_have_plans"},{"#f":5}],"#f":5}]}],{"#f":1}],"we_have_plans":[["^<div class=\"character-header\">Raithe Kole</div>","\n","^Well well well, we have some plans, don't we?","\n","^I've got some things I need from my new crew while you're at Batuu – and that means you.","\n","^I took the liberty of adding reminders to your itinerary – but I'll follow up with more details after you board your transport.","\n","^It's going to be an eventful day – and we'll be right in the action.","\n","ev","str","^<em>The next day...</em>","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ","\n",{"->":"excursion_raithe"},"done",{"#f":5}]}],{"#f":1}],"excursion_raithe":[["^<div class=\"character-header\">Raithe Kole</div>","\n","^I won't be joining you on Batuu – one bad deal with Oga is enough to make you unwelcomed for a while.","\n","^...I wouldn't recommend it.","\n","^However, I have more than enough confidence in you to do your job while I'm readying the ship for your delivery.","\n","^You're taking on a lot of responsibility today.","\n","^Gaya's impressed...I'm waiting to see how you do.","\n","^Where would you like to start?","\n","ev","str","^Deliver coaxium coordinates to Hondo.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"deliver_coaxium_coordinates"},{"#f":5}]}],{"#f":1}],"deliver_coaxium_coordinates":[["^<div class=\"player-answer\">Deliver coaxium coordinates to Hondo.</div>","\n","^<div class=\"character-header\">Raithe Kole</div>","\n","^Alright; you're gonna head over to the spaceport. Look for the Millenium Falcon docked out front.","\n","^<img src=\"./images/millenium-falcon.png\" />","\n","^Ohnaka Transport Solutions is recruiting, and you're going to join.","\n","^Hondo usually has better ships, but Captain Keevan insists we use this hunk of junk.","\n","^Gaya's worked with Hondo on some uh...\"perfectly legitimate\" ships in the past, he'll get us what we need...and you'll be fine.","\n","^When you arrive, let the crew at Ohnaka Transport Solutions know you have coordinates for Hondo.","\n","^<img src=\"./images/ohnaka-transport-solutions.png\" />","\n","^They'll ask you to tap your M-Band – that'll transfer the coaxium transport coordinates to him.","\n","^He'll let you know what to do when you get ready to board the ship...and will get you to Corellia and back in one piece...mostly.","\n","ev","str","^<em>Tap M-Band at Ohnaka Transport Solutions</em>","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"tap_ohnaka"},{"#f":5}]}],{"#f":1}],"tap_ohnaka":[["^<div class=\"progression\">You tap your M-Band at Ohnaka Transport Solutions</div>","\n","^How'd you do? Were you able to get the coaxium?","\n","ev","str","^We got the coaxium!","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"we_got_coaxium"},{"#f":5}]}],{"#f":1}],"we_got_coaxium":[["^<div class=\"player-answer\">We got the coaxium!</div>","\n","^<div class=\"character-header\">Raithe Kole</div>","\n","^That's impressive...and I don't impress easily.","\n","^I'll make sure the Bridge is clear for Hondo's arrival with the cargo.","\n","^Meet me there to make sure it arrives safely!","\n","^<div class=\"button\"><a href=\"\" class=\"button-text\">SHOW EVENTS/span></div>","\n","^One thing for you to do – and this one's for my crew and my crew only.","\n","^Alright. To prepare for our heist later today, we'll need a look-alike Hayananeya stone.","\n","^That way, when we swipe the one onboard the ship, no one will realize it's gone.","\n","^Here are the schematics for the Hayananeya.","\n","^<div class=\"action\">Hayananeya Schematics received.</div>","\n","^Zabaka's a friend who can help us make a convincing fake of the Hayananeya at her toy shop – but she'll need some help and that's where you come in.","\n","ev","str","^What do you need me to do?","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"head_to_zabaka"},{"#f":5}]}],{"#f":1}],"head_to_zabaka":[["^<div class=\"player-answer\">What do you need me to do?</div>","\n","^<div class=\"character-header\">Raithe Kole</div>","\n","^Head over to her shop in the marketplace. It's called Toydarian Toymaker.","\n","^Let me know when you're there.","\n","ev","str","^I'm there.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"at_zabaka"},{"#f":5}]}],{"#f":1}],"at_zabaka":[["^<div class=\"character-header\">Raithe Kole</div>","\n","^Alright – now head over to her stall. You'll probably be able to see her in the back office – she'll be working on some of her toys.","\n","^Don't forget – Oga's always watching.","\n","^We need to get these schematics to Zabaka without Oga knowing – otherwise she'll take a cut of the deal.","\n","^So we're going to slice into Zabaka's databanks with your datapad's Hack tool. This might be a little messy.","\n","^<div class=\"action\">Data Received.</div>","\n","^<div class=\"button\"><a href=\"\" class=\"button-text\">SHOW MAP</a></div>","\n","ev","str","^<em>Hack Zabaka's databanks.</em>","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"hack_zabakas_databanks"},{"#f":5}]}],{"#f":1}],"hack_zabakas_databanks":[["^<div class=\"character-header\">Raithe Kole</div>","\n","^Well...you certainly did something.","\n","^I don't know if i'd call it slicing...","\n","^I'm sure Zabaka will reach out given the unexpected disturbance.","\n","^<div class=\"action\">Received Data</div>","\n","^<div class=\"button\"><a href=\"\" class=\"button-text\">SHOW COMMS</a></div>","\n","^Excellent. We'll let Zabaka do what she does best.","\n","^She can be a little cranky if she gets rushed.","\n","^We'll meet back up onboard the ship later for the actual heist – here's a reminder.","\n","^<div class=\"button\"><a href=\"\" class=\"button-text\">SHOW EVENTS</a></div>","\n","^Nicely done – and very efficient.","\n","^Enjoy your time on Batuu – I would have joined you, but...circumstances dictate otherwise.","\n","^If you see Oga...don't mention me.","\n","^<div class=\"transmission\">/// TRANSMISSION ENDED \\\\\\</div>","\n","ev","str","^<em>Gaya is pleased – Don't know where this is triggered</em>","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^<em>After the heist live moment...</em>","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":"gaya_is_pleased"},{"#f":5}],"c-1":["\n",{"->":"after_heist"},{"#f":5}]}],{"#f":1}],"gaya_is_pleased":["^<div class=\"character-header\">Raithe Kole</div>","\n","^Bravo! I knew you were a sure bet.","\n","^Gaya, is of course, very pleased – though we didn't get the full coaxium payment she'd been promised, the Hayananeya is back where it belongs.","\n","^And, let's be honest, that was the whole reason we came on this little starcruiser anyway.","\n","^If you ever find yourself in the Outer Rim again, drop me a line – I could use someone like you on a future job.","\n","^<div class=\"transmission\">/// TRANSMISSION ENDED \\\\\\</div>","\n","end",{"#f":1}],"after_heist":["^<div class=\"character-header\">Raithe Kole</div>","\n","^...Hondo will get it back up to the ship.","\n","^Phew! That was close. That's not usually how I like to be center stage. But I knew I could count on you to keep Croy distracted. You're one of us now.","\n","^But we still have to keep this coaxium under wraps.","\n","^Be careful with that violet suitcase – coaxium is more unstable than a hungry rancor.","\n","end",{"#f":1}],"global decl":["ev",0,{"VAR=":"console_unlocked"},0,{"VAR=":"eng_room_unlocked"},0,{"VAR=":"cargo_hold_unlocked"},"/ev","end",null],"#f":1}],"listDefs":{}};