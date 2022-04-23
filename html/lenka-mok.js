var storyContent = ﻿{"inkVersion":19,"root":[[{"#":"Character: Lenka Mok"},{"#":"Updated 04-16-2021 @ 9:21 AM ET"},{"#":"theme: dark"},{"#":"author: Disney.<br>all rights reserved."},{"#":"status: in-development"},{"->":"start_lenka_mok"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"start_lenka_mok":[["^Welcome aboard the Halcyon starcruiser!","\n","^I'm Lenka Mok, your cruise director.","\n","^I'm so excited to have you join us on our special 275th anniversary voyage to Batuu.","\n","^As our ship has recently been refurbished, I would encourage you to explore this beautiful starcruiser and get to know your way around!","\n","ev","str","^Do you have a favorite place on the ship?","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"favorite_place"},{"#f":5}]}],{"#f":1}],"favorite_place":[["^<center>Do you have a favorite place on the ship?</center>","\n","^One of my personal favorite locations is the climate simulator - which changes every voyage based on our destination!","\n","^You'll also find plant life from our various past destinations.","\n","^One of the plants is from our home world of Chandrila.","\n","^Did you know that Chandrila was once the capital of the New Republic after the Rebel Alliance defeated the Empire?","\n","ev","str","^I admire the goals of freedom and hope of the old Rebel Alliance.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"admire_goals"},{"#f":5}]}],{"#f":1}],"admire_goals":[["^<center>I admire the goals of freedom and hope of the old Rebel Alliance.</center>","\n","^You know, the message of peace and hope is imbued in the Halcyon as well.","\n","^I hope to see more of you around the starcruiser!","\n","^Please continue exploring our beautiful ship - and grab a bite to eat at the Crown of Corellia dining room!","\n","^And don't forget to head to Muster at 4:00 PM. I'll see you there!","\n","^<center>/// TRANSMISSION ENDED \\\\\\</center>","\n","ev","str","^Scan M-Band on SK","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"scan_mband_on_sk"},{"#f":5}]}],{"#f":1}],"scan_mband_on_sk":[["^Good journey!","\n","^I have to interrupt your voyage - I've never had to before...","\n","^But with the First Order onboard, I have not choice but to involve you.","\n","^It seems my droid transferred some sensitive information to your Datapad.","\n","^SK can be overly trusting....and as their friend, I have to make sure we protect them...and the Resistance.","\n","^You now have the coordinates to a hidden Resistance encampment on Batuu - where we're headed tomorrow.","\n","ev","str","^What do you need me to do?","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"have_coordinates"},{"#f":5}]}],{"#f":1}],"have_coordinates":[["^<center>What do you need me to do?</center>","\n","^It's troubling that Lt. Croy has caught onto our travels around the galaxy...and he can't find out about Batuu.","\n","^I need you to keep that Resistance camp location secret, especially with Lt. Croy sniffing around.","\n","ev","str","^I'll keep the Resistance location safe!","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"keep_location_safe"},{"#f":5}]}],{"#f":1}],"keep_location_safe":[["^<center>I'll keep the Resistance location safe!</center>","\n","^I knew I could count on you!","\n","^Ignite the spark!","\n","^(20:57) Things are...escalating onboard the ship - Sammie uncovered some troubling First Order technology...the Captain bringing Chewbacca onboard means this situation is if more serious than I imagined... and SK's been sharing Resistance data with passengers!","\n","^I...have to coordinate all of these plans so we arrive at Batuu safely.","\n","^And I'll need your help.","\n","^(22:35) SK's capture means we're in a tough spot - but we will not give up.","\n","^It's important more now than ever that we figure out what Lt. Croy's plan is for this ship and crew.","\n","^I've found the schematics of the ship. I think it'll help.","\n","^<strong><em>Schematic: Halcyon received.</em></strong><strong><em></em></strong>","\n","ev","str","^How do we deal with Lt. Croy?","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"deal_with_croy"},{"#f":5}]}],{"#f":1}],"deal_with_croy":[["^<center>How do we deal with Lt. Croy?</center>","\n","^We work together.","\n","^We'll undermine and uncover all of his plans.","\n","^(23:18) Thank you for sticking by SK. Sammie and me - you're a true friend of the Resistance.","\n","^Captain Keevan trusts us to make things right.","\n","^I'll need your help on your planet excursion - to rescue SK and catch up to Lt. Croy's plan.","\n","^I've added some reminders to your itinerary and I'll send details once you're on your way to Batuu.","\n","^Until then...get some rest! you'll need it. It's sure to be an adventure.","\n","^If you look, there are always stars int he galaxy to light our way.","\n","ev","str","^I have a reservation to Oga's","/str","/ev",{"*":".^.c-0","flg":20},["ev",{"^->":"deal_with_croy.0.24.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^I do not have a reservation to Oga's)",{"->":"$r","var":true},null]}],{"c-0":["\n",{"->":"have_reservation"},{"#f":5}],"c-1":["ev",{"^->":"deal_with_croy.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.24.s"},[{"#n":"$r2"}],"\n",{"->":"no_reservation"},{"#f":5}]}],{"#f":1}],"no_reservation":["^To do","\n",{"->":"have_reservation"},{"#f":1}],"have_reservation":[["^(23:29) Oh, by the way, I see you're headed to Oga's Cantina!","\n","^A wise choice - apart from being the best place in the Outer Rim for drinks, there's also some...unique clientele.","\n","^Oga can help us get in contact with a forger to hlep with those ship schematics.","\n",["^Keep an eye on your Datapad while on Batuu - I'll send more details then.","\n","^(09:03) I know this was meant to be a normal planet excursion - I usually take care of these things myself while at ports of call but I am under too much scrutiny from Croy.","\n","^I appreciate your willingness to complete our Resistance operations.","\n",{"->":"DIANNE_45"},{"#f":5,"#n":"g-0"}],null],{"#f":1}],"DIANNE_45":[["^(09:08) We need to find a way to rescue SK and figure out why Lt. Croy needed those ship schematics yesterday.","\n","^Which would you be able to handle first?","\n","^Please choose carefully - you'll need to complete one before starting another.","\n",["ev",{"^->":"DIANNE_45.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Find a way to rescue SK.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"DIANNE_45.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"rescue_sk"},{"#f":5}]}],{"#f":1}],"rescue_sk":["^(13:09) That explains these new datatapes that just appeared on our cargo manifest.","\n","^These must be for the engineering room.","\n","^I'll regroup with Sammie and figure out how to use these datatapes to safeguard the ship against whatever Croy has planned.","\n","^I can't thank you enough for your dedication to helping this ship, it's crew...and the Resistance.","\n","done",{"forTheResistance":["^___for the resistance","\n","^Sometimes we have to let go of those we love for a greater purpose. It's for the best; and I'm sure I'll see them again!","\n","^SK wouldn't be safe without your help - and your friendship.","\n","^This has certainly been an adventure - and I am so glad we've become friends along the way.","\n","^TA' BU E TAY!","\n","end","end",{"#f":1}],"#f":1}],"#f":1}],"listDefs":{}};