var name = prompt('Hello adventurer.  What do they call you?');
var score = 0;

// Boolean values that show whether or not bosses have been defeated or the Master Sword collected
var windblight = false;
var fireblight = false;
var thunderblight = false;
var waterblight = false;
var masterSword = false;

alert('Welcome, ' + name + '. As you are on your adventure, you will be asked to make choices denoted by brackets ( \'[\' and \']\'). Answer with the word in brackets to select a choice. Good luck!');

alert('Your journey begins as you wake from a thousand year slumber deep within the earth. Exiting your regeneration pod, you stumble as your body moves for the first time since you hid yourself here. The walls and machines begin to light up around you, as if waking up to welcome you. Nearby, you see a pedestal. You can feel it calling to you.');

questStart();

function questStart() {
    var startChoice = prompt('What will you do? Approach the pedestal [Approach] ? Or go back to sleep [Sleep] ? [Nothing] ?')
    if (startChoice.toLowerCase() === 'approach') {
        alert('You approach the pedestal, and as you near it it begins to buzz and come to life. The center of the pedestal rotates and opens up revealing a tablet.  You feel that this holds the answers you desire. Picking up the tablet, the screen lights up and you can hear a voice in your mind directing you to the nearby door that reaches from floor to ceiling.');
        alert('"' + name + '! You have finally awoken. For the past one thousand years you have rested and regenerated while I\'ve kept Ganon at bay. But my power wanes, and now is the time for you to strike! Please, defeat the four divine beasts that have been corrupted by his will and find the Great Deku Tree, then finish Ganon once and for all. You are our last hope..." The voice fades out as you exit your chambers and enter the outside world.');

        mainChoice();

        function mainChoice() {
            var choice1a = prompt('You find yourself in Central Hyrule. What will you do from here? Fight the Windblight [Wind] ? Fight the Fireblight [Fire] ? Fight the Thunderblight [Thunder] ? Fight the Waterblight [Water] ? Retrieve the Master Sword [Sword] ? Or storm the castle and fight Ganon head-on [Castle] ? Current score is: ' + score + '.');
            if (choice1a.toLowerCase() === 'wind') {
                if (windblight) {
                    alert('You\'ve already fought and defeated the Windblight!');
                }
                else {
                    pathWind();
                }
                mainChoice();
            }
            else if (choice1a.toLowerCase() === 'fire') {
                if (fireblight) {
                    alert('You\'ve already fought and defeated the Fireblight!');
                }
                else {
                    pathFire();
                }
                mainChoice();
            }
            else if (choice1a.toLowerCase() === 'thunder') {
                if (thunderblight) {
                    alert('You\'ve already fought and defeated the Thunderblight!');
                }
                else {
                    pathThunder();
                }
                mainChoice();
            }
            else if (choice1a.toLowerCase() === 'water') {
                if (waterblight) {
                    alert('You\'ve already fought and defeated the Waterblight!');
                }
                else {
                    pathWater();
                }
                mainChoice();
            }
            else if (choice1a.toLowerCase() === 'sword') {
                if (masterSword) {
                    alert('You\'ve already braved the Lost Woods and retrieved the Master Sword!');
                }
                else {
                    pathSword();
                }
                mainChoice();
            }
            else if (choice1a.toLowerCase() === 'castle') {

                confirmation();

                function confirmation() {
                    var confirmAnswer = prompt('Once you take the fight to Ganon, there is no going back. Are you sure you are ready [Yes or No] ?');
                    if (confirmAnswer.toLowerCase() === 'yes') {
                        pathCastle();
                    }
                    else if (confirmAnswer.toLowerCase() === 'no') {
                        mainChoice();
                    }
                    else {
                        alert('Please choose a valid choice.');
                        confirmation();
                    }
                }
            }
            else if (choice1a.toLowerCase() === 'pub') {
                alert('Link turns to his ragtag group and says, "Let\'s go to the Winchester, have a nice cold pint, and wait for this all to blow over." THE END!')
            }
            else {
                alert('Please choose a valid choice.');
                mainChoice();
            }
        }
    }
    else if (startChoice.toLowerCase() === 'sleep') {
        score = -1;
        alert('On second thought, hitting the snooze button sounds really good right now. You return to your regeneration pod. Unfortunately, this particular model of regeneration pod is only rated for 1000 years, and you slowly decompose in the pod as it fails to reawaken you once you return to your slumber.')
        scoreJudge(score);
    }
    else if (startChoice.toLowerCase() === 'nothing') {
        score = -1;
        alert('Frozen by indecision, you stand there, pondering your next move, as the surrounding machinery and lights fade out due to your inactivity. When full darkness envelops you, you begin to hear movement from behind. You are eaten by a grue.');
        scoreJudge(score);
    }
    else {
        alert('Please choose a valid choice to begin your adventure.');
        questStart();
    }
}

function pathWind() {

    alert('You turn to the northwest to face the land of the Rito, a birdlike race of people. Their divine beast, Vah Medoh, has been corrupted by the Windblight. Your journey takes you through a vast plain and many snowy passes, but finally you reach the Rito village. Perched on top of their home is the divine beast. You enter the village and enlist a young Rito\'s help in reaching the beast that towers above.');
    alert('On the divine beast itself, you face many trials and tribulations as you make your way to its core. Finally, you set your eyes on the Windblight that is corrupting the beast. It turns to face you and lunges!');

    windAction();

    function windAction() {
        var windChoice = prompt('How do you react? [Attack] ? [Parry] ? [Dodge] ?');
        if (windChoice.toLowerCase() === 'attack') {
            score -= 25;
            alert('You slash at the monster with all your strength as it reaches you, but it dodges your attempts and counters with an attack of its own. A new deep cut gushes blood as you turn to face the creature again as it advances on you once more.');
            windAction();
        }
        else if (windChoice.toLowerCase() === 'parry') {
            if (masterSword) {
                score += 100;
                alert('With the Master Sword in hand, you set yourself in a stance waiting for an opportune moment to strike. The creature swipes but you block and take advantage of the opening, killing the Windblight in one fell swoop. The corruption begins to disappear all around you as you make your exit. Ready to make your next move, you return to Central Hyrule.');
            }
            else {
                score += 50;
                alert('You brandish your sword and wait for a chance to counter the Windblight. It nears you and makes a swipe, but you counter and put a deep cut in its arm. On its backswing, it puts a cut in your body and blood splashes the ground. You turn to face it again and counter its next attack, this time thrusting your blade deep in its dark heart. As it screeches in agony, the corruption around you fades away. You wipe the blood off of your hands and head back to Central Hyrule, ready to make your next move.');
            }
            windblight = true;
        }
        else if (windChoice.toLowerCase() === 'dodge') {
            alert('The creature watches you and you deftly dodge, resulting in several feet of space falling between you and the monster, as it turns to face you again.');
            windAction();
        }
        else {
            alert('Please choose a valid choice.');
            windAction();
        }
    }
}

function pathFire() {

    alert('You turn to the northeast and face the land of the Gorons, a race of rock people. Their divine beast, Vah Rudania, has been corrupted by the Fireblight. To reach the Gorons land you travel through hot mountain passes and cross large streams of flowing lava. Eventually you find the Goron village and utilize their support to board the divine beast and go after the corruption troubling this land.');
    alert('On board Vah Rudania, you fight corrupted creatures and monsters in your search for the core. When you finally discover it, you see the Fireblight in wait, watching you with glowing red eyes from its throne of corruption. As you approach its throne, it stands up and unsheaths its blade made of pure fire, then begins sprinting towards you.');

    fireAction();

    function fireAction() {
        var fireChoice = prompt('How do you react? [Attack] ? [Parry] ? [Dodge] ?');
        if (fireChoice.toLowerCase() === 'attack') {
            if (masterSword) {
                score += 100;
                alert('You unleash a flurry of blows on the Fireblight. Unable to counter your speed and power, it falls to the ground on its knees, and you decapitate it with one final swing. With the monster dead, the corruption around you and in the Gorons\' land disintegrates and fades into nothingness. With this blight defeated, you return to Central Hyrule to prepare for your next move.');
            }
            else {
                score += 50;
                alert('You unleash a flurry of blows on the Fireblight. It manages to counter and damage you twice, but your speed advantage quickly overcomes the creature as you topple it to the ground. The corruption around you fades away leaving the nearby land whole again. You return to Central Hyrule and plan your next move.');
            }
            fireblight = true;
        }
        else if (fireChoice.toLowerCase() === 'parry') {
            score -= 25;
            alert('You attempt to parry the Fireblight but realize quickly that his power is too much for you to block. He knocks your sword out of your hand and forces you to retreat and retrieve it. As you grab your weapon, you turn to see him heading your way once more.');
            fireAction();
        }
        else if (fireChoice.toLowerCase() === 'dodge') {
            alert('The Fireblight nears you and you react by rolling to the side, narrowly avoiding its fiery slash. Coming to your feet and ready yourself for its next advance.');
            fireAction();
        }
        else {
            alert('Please choose a valid choice.');
            fireAction();
        }
    }
}

function pathThunder() {

    alert('You turn to the southwest and face the land of the Gerudo, a desert people. They make their home deep in an ever-changing desert. After a grueling journey in the scorching heat, you make your way to the Gerudo settlement, where you manage to convince their Queen to lend you her support in reaching the nearby roaming divine beast, Vah Naboris.');
    alert('On board the divine beast, you push and slash your way to the center of the corruption. There you find the Thunderblight, arcs of electrictity streaking from its body to the machinery surrounding it. With a flash, it strikes out at you.');

    thunderAction();

    function thunderAction() {
        var thunderChoice = prompt('How do you react? [Attack] ? [Parry] ? [Dodge] ?');
        if (thunderChoice.toLowerCase() === 'attack') {
            alert('You swing your sword at your would-be attacker, managing to keep it at bay. However, you only manage to scare it to a distance. Its eyes spark and it streaks towards you once more.');
            thunderAction();
        }
        else if (thunderChoice.toLowerCase() === 'parry') {
            if (masterSword) {
                score += 100;
                alert('You parry its attack to the right and clockwise spin into a slash on the Thunderblight\'s backside, using the Master Sword to cut it in half. As the two pieces of its body fall to the ground, the corruption around the Gerudos\' land turns to dust. With this no-longer-corrupted beast behind you, you return to Central Hyrule, looking forward to your next challenge.');
            }
            else {
                score += 50;
                alert('You attempt to parry the Thunderblight\'s first swipe, but get hit on your shoulder. You manage to redirect its second swipe with your sword, leaving the creature open to your attack. Its two halves hit the ground and the corruption disappears around you. Returning to Central Hyrule, you begin to plan your next move.');
            }
            thunderblight = true;
        }
        else if (thunderChoice.toLowerCase() === 'dodge') {
            score -= 25;
            alert('You try to dodge, but as you are coming out of your roll the Thunderblight slashes at your legs, causing blood to streak across the ground. Struggling to stand, you prepare for its next advance.');
            thunderAction();
        }
        else {
            alert('Please choose a valid choice.');
            thunderAction();
        }
    }
}

function pathWater() {

    alert('You turn to the southeast to face the land of the Zora, a fishlike people. Their divine beast, Vah Ruta, dwells deep beneath the lake they call home. To reach their secluded abode, you make your way up Ploymus Mountain with treacherous rivers and gushing waterfalls, finally resting your eyes upon their water-filled caldera. With the help of the Zoran prince, you descend into the maw of the beast.');
    alert('Inside the bowels of Vah Ruta, you fight a couple dozen corrupted creatures on your way to the beast\'s core. There waiting for you is the Waterblight, swimming swiftly in a dark pool. You stand on a single platform in the center of the monster\'s den. From inside the pool, the monster rapidly approaches you from behind.');

    waterAction();

    function waterAction() {
        var waterChoice = prompt('How do you react? [Attack] ? [Parry] ? [Dodge] ?');
        if (waterChoice.toLowerCase() === 'attack') {
            score -= 25;
            alert('You attempt to attack the lunging monster but it out paces you and cuts deep gashes in your sides. Turning around you ready yourself for another attack, one hand clutching your cuts, blood dripping through your hand.');
            waterAction();
        }
        else if (waterChoice.toLowerCase() === 'parry') {
            alert('You parry the creature\'s slashing swipes but it manages to evade your counter attack. As the Waterblight returns to its dark waters, you brace for its next attack.');
            waterAction();
        }
        else if (waterChoice.toLowerCase() === 'dodge') {
            if (masterSword) {
                score += 100;
                alert('With a quick sidestep you dodge the Waterblight\'s sharp swipe and reach out with the Master Sword to stab at its torso. The blade connects and sends the evil beast into an agonizing rage as you slice downward into the monster\'s head. The corruption around you fades into nothingness as you leave the divine beast and return to the surface. On your journey back to Central Hyrule, you ponder your next move.');
            }
            else {
                score += 50;
                alert('With a sidestep you dodge the Waterblight and reach out with your sword to stab at it, but it crashes to the ground out of reach. As you approach it to make the killing blow, it swipes at you causing you to stumble backwards with deep scratches on your chest. You recover and drive your sword directly into its head. The corruption seeping into the land around you fades and you return to Central Hyrule, ready to face your next challenge.');
            }
            waterblight = true;
        }
        else {
            alert('Please choose a valid choice.');
            waterAction();
        }
    }
}

function pathSword() {

    alert('Realizing that taking the fight to Ganon without the Master Sword is sure to end in failure, you turn your sights to the Lost Woods, far north of Hyrule Castle.');
    alert('You peer into the Lost Woods from the overgrown entrance, fog rolling out and around you. It seems you won\'t be able to see further than a few yards while exploring the woods.');

    swordAction1();

    function swordAction1() {
        let choice = prompt('You have three choices from your current position: [Left], [Right], and [Forward]');
        if (choice.toLowerCase() === 'left' || choice.toLowerCase() === 'forward') {
            alert('You head in your chosen direction and find yourself back where you started.');
            swordAction1();
        }
        else if (choice.toLowerCase() === 'right') {
            alert('You take a right and find yourself deeper in the woods, closer to the center.');
            swordAction2();
        }
        else {
            alert('Please choose a valid choice.');
            swordAction1();
        }
    }

    function swordAction2() {
        let choice = prompt('You have three choices from your current position: [Left], [Right], and [Forward]');
        if (choice.toLowerCase() === 'right' || choice.toLowerCase() === 'forward') {
            alert('You head in your chosen direction and find yourself back where you started.');
            swordAction1();
        }
        else if (choice.toLowerCase() === 'left') {
            alert('You take a left and find yourself deeper in the woods, the top of the Great Deku Tree towering above you.');
            swordAction3();
        }
        else {
            alert('Please choose a valid choice.');
            swordAction2();
        }
    }

    function swordAction3() {
        let choice = prompt('You have three choices from your current position: [Left], [Right], and [Forward]');
        if (choice.toLowerCase() === 'left' || choice.toLowerCase() === 'right') {
            alert('You head in your chosen direction and find yourself back where you started.');
            swordAction1();
        }
        else if (choice.toLowerCase() === 'forward') {
            score += 100;
            alert('You take the path ahead of you and find yourself entering the center of the Lost Woods. In front of the eternally slumbering Great Deku Tree sits the Master Sword, sheathed in its plinth. Light streaks down from the upper canopy resulting in a spotlight, directing all attention to its magnificent glory. You reach out and grasp the handle, the blade begins to glow, and you lift the Master Sword into the air. With your new weapon in hand, you return to Central Hyrule and plot your next move.');
            masterSword = true;
        }
        else {
            alert('Please choose a valid choice.');
            swordAction3();
        }
    }
}

function pathCastle() {

    alert('From the entrance to the downtrodden castle, the castle towers above you with corruption covering the stonework and bulwarks. You fight through each level, each one tougher than the last, until you reach the central keep. Directly in front of you, the behemoth that is Ganon lumbers in your direction.');

    castleAction();

    function castleAction() {
        if (masterSword && (windblight || fireblight || thunderblight || waterblight)) {
            score += 100;
            alert('The Master Sword shines as you charge at the source of this lands corruption. With Ganon weakened from your previous efforts, you are able to make quick work of him, slicing and dicing at his monstrous presence. As he falls to the ground, light returns to the land and his corrupted beasts fade to dust then vanish completely. This land will know peace for many millenia now, thanks to you.')
        }
        else if (windblight || fireblight || thunderblight || waterblight) {
            score += 50;
            alert('With Ganon at a weakened state from your efforts against his corruption, you are able to keep pace with him as you begin your bout. At first you trade hits and blood begins to pool on the battlefield from both sides, but your speed catches up to him, resulting in an upwards stab through his heart. He falls to the ground, and you can feel his corruption being lifted from he land around you. This land will now know peace.');
        }
        else {
            score = -1;
            alert('The fight begins and his immense power and swift speed proves too much to handle. When you swing your sword he seems to vanish and appear in a completely different spot. You feel that Ganon is toying with you. As you back up against a wall, Ganon reaches out and tosses you up, and as you fall back to your doom, you wonder if there is anything you could have done to prepare for this fight.');
        }
    }

    scoreJudge(score);
}

function scoreJudge(score) {
    alert('You scored ' + score + ' points during this playthough.');
    if (score <= 0) {
        alert('You should probably try reading a book or watching a movie.  You know, something more passive.');
    }
    else if (score > 0 && score <= 150) {
        alert('You were able to defeat Ganon with minimal preparation, resulting in beasts roaming free across the land. Hey, at least the castle is clear!');
    }
    else if (score > 150 && score <= 500) {
        alert('You focused on preparation before the final battle and this resulted in a less corrupted land for the peoples of Hyrule. Well done!');
    }
    else {
        alert('You found the Master Sword, defeated all of the corrupted divine beasts, then went on to defeat Ganon at Hyrule Castle.  The land is free from his influence and corruption forever thanks you! Congratulations!');
        alert('p.s. Next time you are trying to decide what to do, remember to check out the [Pub]!')
    }
}