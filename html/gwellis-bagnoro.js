var storyContent = ﻿{"inkVersion":19,"root":[[{"#":"Character: Gwellis Bagnoro"},{"#":"Updated 04-18-2021 @ 4:36 PM ET"},{"#":"theme: dark"},{"#":"author: Disney.<br>all rights reserved."},{"#":"status: done"},"^<div class=\"button\"><a href=\"\" class=\"button-text\">SHOW MAP</a></div>","\n",{"->":"start_gwellis_bagnoro"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"start_gwellis_bagnoro":[["^<div class=\"character-header\">Gwellis Bagnoro</div>","\n","^Ah, I see Oga's giving out my contact card.","\n","^I expect that's going to cost you.","\n","^What do you want?","\n","^<div class=\"player-header\">You</div>","\n","ev","str","^The First Order is up to something on the Halcyon starcruiser.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^<div class=\"player-answer\">The First Order is up to something on the Halcyon starcruiser.</div>","\n",{"->":"fo_up_to_something"},{"#f":5}]}],{"#f":1}],"fo_up_to_something":[["^<div class=\"character-header\">Gwellis Bagnoro</div>","\n","^The First Order, eh? Yeah they've been poking around.","\n","^Said they needed to override the ship systems.","\n","^If you're trying to stop them, I'm willing to help – though my rates might get a little higher.","\n","^This Halcyon conflict is proving very profitable.","\n","^<div class=\"player-header\">You</div>","\n","ev","str","^I have the ship schematics – can you help?","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^<div class=\"player-answer\">I have the ship schematics – can you help?</div>","\n","^<img src=\"./images/ship-schematics.png\" />","\n",{"->":"have_schematics"},{"#f":5}]}],{"#f":1}],"have_schematics":[["^<div class=\"character-header\">Gwellis Bagnoro</div>","\n","^Hm...this starcruiser's had a lot of work done over the years.","\n","^But I think I can be convinced to share a way to override the ship too.","\n","^I'll do it for 10,000 credits.","\n","^<div class=\"player-header\">You</div>","\n","ev","str","^I don't have that kind of money!","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^<div class=\"player-answer\">I don't have that kind of money!</div>","\n",{"->":"dont_have_money"},{"#f":5}]}],{"#f":1}],"dont_have_money":[["^<div class=\"character-header\">Gwellis Bagnoro</div>","\n","^Tough luck. This kind of work doesn't come cheap.","\n","^Alternatively...I could use a favor.","\n","^<div class=\"player-header\">You</div>","\n","ev","str","^A favor?","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^<div class=\"player-answer\">I don't have that kind of money!</div>","\n",{"->":"a_favor"},{"#f":5}]}],{"#f":1}],"a_favor":[["^I live in these apartments above the marketplace.","\n","^Unfortunately, that means dealing with that stupid podracing engine Bakkar installed to cook his ronto meat.","\n","^<img src=\"./images/ronto_roasters.png\" />","\n","^That thing is so loud I can't concentrate.","\n","^If you'll shut it down for me, I'll do this work for you.","\n","^<div class=\"player-header\">You</div>","\n","ev","str","^Where do I need to go?","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^<div class=\"player-answer\">Where do I need to go?</div>","\n",{"->":"where_do_i_go"},{"#f":5}]}],{"#f":1}],"where_do_i_go":[["^<div class=\"character-header\">Gwellis Bagnoro</div>","\n","^I'm sending the coordinates to your datapad.","\n","^Head here and tap the map marker. Hack that engine to shut it down.","\n","^<div class=\"button\"><a href=\"\" class=\"button-text\">VIEW TRANSCRIPT</a></div>","\n","ev","str","^<em>You hack the engine</em>","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"hack_engine"},{"#f":5}]}],{"#f":1}],"hack_engine":[["^<div class=\"character-header\">Gwellis Bagnoro</div>","\n","^Ah, well done – finally some peace and quiet.","\n","^Alright, Alright, let's take a look.","\n","^<div class=\"player-header\">You</div>","\n","ev","str","^Any idea how to stop the First Order?","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^<div class=\"player-answer\">Any idea how to stop the First Order?</div>","\n",{"->":"stop_first_order"},{"#f":5}]}],{"#f":1}],"stop_first_order":[["^<div class=\"character-header\">Gwellis Bagnoro</div>","\n","^I agreed to help the First Order override the ship's security protocols and get access to the base systems.","\n","^Unfortunately...you'll need some datatapes that will have to manually be placed in ports in the ship's engineering room to get the same access.","\n","^I'll need you to find some in order to develop the workaround.","\n","^Think you can manage that for me?","\n","^<div class=\"player-header\">You</div>","\n","ev","str","^Where can I find them?","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^<div class=\"player-answer\">Where can I find them?</div>","\n",{"->":"where_find_them"},{"#f":5}]}],{"#f":1}],"where_find_them":[["^<div class=\"character-header\">Gwellis Bagnoro</div>","\n","^Hm...these old datatapes were also used in droid programming.","\n","^Try behind the Droid Depot – sometimes Mubo leaves some old scraps back there.","\n","^Head there and tap the map marker to initiate your scan tool.","\n","^<img src=\"./images/crates-droid-depot.png\" />","\n","^<div class=\"action\">Data Received.</div>","\n","^<div class=\"button\"><a href=\"\" class=\"button-text\">SHOW MAP</a></div>","\n","^<div class=\"button\"><a href=\"\" class=\"button-text\">VIEW MANIFEST</a></div>","\n","ev","str","^<em>You scan the datatapes</em>","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"scan_datatapes"},{"#f":5}]}],{"#f":1}],"scan_datatapes":[["^<div class=\"character-header\">Gwellis Bagnoro</div>","\n","^Ah, you found them!","\n","^I'll get to programming these.","\n","^<div class=\"player-header\">You</div>","\n","ev","str","^How will they get back to the ship?","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^<div class=\"player-answer\">How will they get back to the ship?</div>","\n",{"->":"how_get_back"},{"#f":5}]}],{"#f":1}],"how_get_back":["^<div class=\"character-header\">Gwellis Bagnoro</div>","\n","^Don't worry – you'll get them soon enough.","\n","^I'll pack these datatapes up in a crate and send it up with your transport.","\n","^<img src=\"./images/crate-datatapes.png\" />","\n","^Now go tell Lenka that the job's done.","\n","^<div class=\"action\">Received Data</div>","\n","^<div class=\"button\"><a href=\"\" class=\"button-text\">SHOW COMMS</a></div>","\n","^<div class=\"transmission\">/// TRANSMISSION ENDED \\\\\\</div>","\n","end",{"#f":1}],"global decl":["ev",0,{"VAR=":"ronto_roasters_off"},"/ev","end",null],"#f":1}],"listDefs":{}};