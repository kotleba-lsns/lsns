var {header, footer, mkP, mkUL, mkGal, mkProfile} = require('./script.js');
DIR = 'img/odsudeni/';

header('index.html', 'Odsúdení násilníci, fašisti, klamári', 'Kotlebovci sa tvária, že chcú Slovensko očistiť. Vo vlastných radoch však majú odsúdených násilníkov a fašistov.');
mkProfile('kiraly', 'Jozef Király', 'odsúdený na 23 rokov za úkladnú vraždu',
    [ mkUL(
      [ 'Na svojom dvore mal dobodať muža a prinútiť manželku, aby mu pomohla odstrániť telo [https://bit.ly/3ocmxdj] [https://bit.ly/3koDC1] [https://bit.ly/31YSX1G] [https://bit.ly/2NGH5cI] [https://bit.ly/2rQbuxH] [https://bit.ly/2RuT28P] [https://bit.ly/2rRcIca]'
      , 'V apríli 2019 sa pobil kvôli nálepke [https://bit.ly/2Pcy3EH]'
      , 'Király je bývalý okresný predseda ĽSNS (Poprad), po obvinení mu pozastavili členstvo'
      ])
    , mkGal(
      [ ['kiraly1.webp', 'Jozef Király, bývalý okresný predseda ĽSNS, s krajským predsedom Milanom Mazurekom']
      , ['kiraly2.webp', 'Jozef Király na volebnom letáku ĽSNS']
      ])
    ])

mkProfile('martinak', 'Róbert Martinák', '<big>11&times;</big> odsúdený kontrolór RSC',
    [ mkUL(
      [ '3x odsúdený za krádež a výtržníctvo, 6x uznaný vinným z priestupku proti majetku a 2x proti občianskemu spolunažívaniu  [https://bit.ly/2DJ8xBB] [https://bit.ly/2DRms8J]'
      , 'cez vetracie okno sa vkradol do rekreačného zariadenia; muža, ktorý ho pristihol, napadol a vybil mu 4 zuby'
      , 'všetky tresty boli v 2012 zahladené'
      , 'takéhoto človeka Kotleba v BB zamestnal ako <i>Kontrolóra</i> regionálnej správy ciest'
      , 'pár mesiacov od nastúpenia do funkcie opäť preverovaný políciou v súvislosti s vyšetrovaním falšovania dokladov'
      //, '<iframe width="640" height="360" src="//www.tvnoviny.sk/player_ssl/15408_video?id=15408&is_web=1&domainName=tvnoviny.sk&domainNameEnv=https://www.tvnoviny.sk&autoplay=0&noads=0&nomidads=0&nopreads=0&nopostads=0&desc=http://www.tvnoviny.sk/domace/1755026_kontrolor-regionalnej-spravy-ciest.-zamestnal-ho-kotleba&DFP_domain_name0=tvnoviny.sk&DFP_domain_name1=main&DFP_section_name0=domace&DFP_section_name1=no&DFP_section_type=article&DFP_detail_id=1755026&upScoreSection=Dom%C3%A1ce&upScorePubDate=2019-12-04T07:19:53+01:00&upScoreAuthor=jhabarova&utm_source=videoarchiv&utm_medium=video&utm_content=[2014-05-06] 19 BB Kontrolor mesta problem.transfer_tvnoviny.mp4 <78>&utm_campaign=embed" style="border:none;" allowfullscreen></iframe>'
      ])
    ])
      
mkProfile('medvecky', 'Andrej Medvecký', 'odsúdený za ublíženie na zdraví, v&nbsp;podmienke za jazdu pod vplyvom alkoholu',
    [ mkUL(
      [ 'odsúdený za napadnutie Dominikánca Leniho Cruza (2014); podľa svedkov na ňom sedel, boxoval mu do tváre a kričal „Zabite toho n*gra, nemá tu čo robiť, toto je tvoj koniec!“ [https://bit.ly/2si3Ig6] [https://bit.ly/2RRE3Gb]'
      , 'do podmienky (30 mesiacov) za napadnutie cudzinca mu zarátali mesiace, ktoré už bol v podmienke za šoférovanie pod vplyvom alkoholu v 2015; skúšobná doba mu uplynula koncom septembra 2017 a má preto čistý register trestov [https://bit.ly/3130Gtq]'
      , 'vyšetrovaný tiež kvôli napadnutiu muža z Trstenej (2015); niekoľkokrát ho udrel päsťou do tváre a zlomil mu nos, muž bol 10 dní PN [https://bit.ly/36nRSju]'
      , 'predseda severoslovenského krajského klubu'
      , 'zvolený do parlamentu; vzdal sa mandátu, namiesto neho nastúpil Mazurek'
      ])
    , mkGal(
      [ ['med1.webp', 'Dobitý Dominikánec Leni Cruz. Podpredseda ĽSNS, Andrej Medvecký, na ňom podľa svedkov sedel, boxoval mu do tváre a kričal „Zabite toho n*gra, nemá tu čo robiť, toto je tvoj koniec!“' ]
      , ['med2.webp', 'Model Andrej Medvecký v tričku „anti-antifa“, „pure hate“ (čistá nenávisť). Ak antifa sú proti fašizmu, potom mi to vychádza tak, že anti-antifa zrejme budú fašisti.']
      , ['med3.webp', 'Manekýn Andrej Medvecký v tričku „hatecore“. Hatecore je žáner nacistickej punkovej hudby širiaci nenávisť k Židom, minoritám, homosexuálom, atď. Good Night Left Side je neonacistické hnutie, ktoré vzniklo ako reakcia na antifašistické hnutie Good Night White Pride.']
      ])
    ])

mkProfile('bahno', 'Peter Bahno', 'odsúdený za násilné trestné činy (3&nbsp;roky s podm. odkladom na 5&nbsp;rokov)',
    [ mkUL(
      [ 'vinný z prečinu ublíženia na zdraví, pokusu zločinu ublíženia na zdraví, prečinu výtržníctva a zo zločinu obmedzovania osobnej slobody vo forme spolupáchateľstva (2013) [https://bit.ly/2RI2uWs]'
      , 'asistent poslanca Stanislava Drobného'
      ])
    , mkGal(
      [ ['bah1.webp', 'Peter Bahno „hliadkuje“ vo vlaku.']
      , ['bah2.webp', 'Marian Kotleba, za ním Peter Krupa a Peter Bahno']
      ])
    ])
   
mkProfile('magat', 'Marián Magát', 'odsúdený za nedovolené ozbrojovanie (3&nbsp;roky podm.)',
    [ mkUL(
      [ 'odsúdený na tri roky podmienečne za nedovolené ozbrojovanie [https://domov.sme.sk/c/20966017/extremista-magat-sa-ma-v-januari-postavit-pred-specializovany-trestny-sud.html]'
      , 'obžalovaný pre hanobenie národa, rasy a presvedčenia [https://domov.sme.sk/c/22063880/sud-s-magatom-nebude-prokurator-vzal-obzalobu-spat.html]'
      , 'v 2016 kandidoval za ĽSNS z 88. miesta'
      ])
    , mkGal(
      [ ['mag1.webp', 'Podľa Mariána Magáta, kandidáta č. 88, bol Hitler „mierotvorca“ a „človek so srdcom na správnom mieste“, „úžasný človek“.']
      , ['mag2.webp', 'Marián Magát, kandidát č. 88, je známy popierač holokaustu.']
      , ['mag3.webp', 'Podľa Mariána Magáta (kandidáta č. 88) je holokaust „rozprávka“, „švindelkaust“.']
      , ['mag4.webp', 'Číslo 88 na kandidátke ĽSNS nebola náhoda - bolo „jeho želanie troška“. („88“ je neonacistický kód pre „HH“, teda „Heil Hitler“ - H je 8. písmeno v abecede.)']
      , ['mag5.webp', 'Marián Magát by „asociálov“ poslal do pracovných táborov. Už sa to predsa raz osvedčilo.']
      ])
    ])
   
mkProfile('rogel', 'Rastislav Rogel', '2&times; odsúdený za ublíženie na zdraví; vytetovaný hákový kríž; obvinený z výroby a šírenia extrémistických materiálov',
    [ mkUL(
      [ 'odsúdený v 2004 - „spôsobil zranenia s dobou liečenia asi 5 mesiacov s trvalými následkami“ [https://bit.ly/35QZlHO]'
      , 'v 2008 sa opäť pobil - rasový motív súd neuznal napriek tomu, že mal kričať „Zabijeme vás, vy židovské svine, my sme Juden Mord!“ - svedkovia začali meniť výpovede a tvrdiť, že už si nepamätajú'
      , 'vyviazol iba so 14 mesiacmi podmienky za výtržníctvo, po odvolaní ho dokonca oslobodili [https://bit.ly/35QZlHO][https://bit.ly/2Shxa11][https://bit.ly/34L1hAn][https://bit.ly/2QnjwXF]'
      , 'na ruke mal vytetovaný hákový kríž'
      , 'líder skupín Krátky proces a Juden Mord („Vraždenie Židov“)'
      , 'Rogel a Krátky proces sú dodnes aktívni; v 2018 odohrali v Detve koncert ku 30. výročiu spolu s ďalšími neonacistickými kapelami ako Sokyra Peruna (ukr.) či Gesta Bellica (tal.) [https://bit.ly/35gRwOt]'
      , 'obvinený z výroby a šírenia extrémistických materiálov  [https://bit.ly/2Za36XA] [https://bit.ly/3lU0MxG]'
      , 'v 2016 kandidoval za ĽSNS z 44. miesta'
      ])
    , mkGal(
      [ ['rog1.webp', 'Rastislav Rogel, kandidát ĽSNS č. 44 s hákovým krížom na ruke']
      , ['rog2.webp', 'Rastislav Rogel a dezert s hákovým krížom']
      , ['rog3.webp', 'Rastislav Rogel v tričku s hajlujúcim Adolfom Hitlerom. Rogel bol spevák nacistických skupín Krátky proces a Juden Mord (v preklade „Vraždenie Židov“)']
      , ['rog4.webp', 'Text Rogelovej „piesne“: Žid vládne svetu, klameš zas ty pes, skončíš v peci tiež.']
      , ['rogel-ss.webp', 'Obraz Rastislava Rogela ako dôstojníka SS']
      , ['kp05olomouc.webp', 'Koncert kapely Krátky proces, Olomouc 2005']
      , ['kp.webp', 'Koncert kapely Krátky proces']
      ])
    ])
   
mkProfile('mazurek', 'Milan Mazurek', 'vinný z úmyselného prečinu hanobenia národa, rasy či presvedčenia',
    [ mkUL(
      [ 'pokutu 10,000eur za jeho výroky v rádiu Frontinus zaplatil; na súde sa obhajoval, že videozáznam je vraj „sfalšovaný“'
      , 'v skupine, ktorá hádzala kamene na ženy a deti [https://www.youtube.com/watch?v=5JAqE4feToQ] [https://bit.ly/380xJBL] [https://bit.ly/2tdHfkU]'
      , 'do parlamentu sa dostal ako náhradník za Medveckého'
      , 'predseda východoslovenského krajského klubu'
      ])
    , mkGal(
      [ ['https://www.youtube.com/watch?v=8eAQp6D0onk&t=815', 'maz1.webp']
      , ['maz3.webp', 'Podľa Mazureka bol holokaust rozprávka.']
      , ['maz2.webp', 'Milan Mazurek šíri nenávisť voči Rómskemu etniku.']
      , ['maz4.webp', 'Kajakár Miňo Mazurek']
      , ['maz5.webp', 'Slávny tenor Miňo Mazurek']
      , [ 'maz6.webp', 'Milan Mazurek a detská strava' ]
      ]) // https://www.youtube.com/watch?v=5JAqE4feToQ https://www.youtube.com/watch?v=sM-EY5u3XFM 
    ])  
   
mkProfile('jakubik', 'Rastislav Jakubík', 'vytetovaný hákový kríž',
  [ mkUL(
    [ 'maličký hákový kríž je uprostred veľkého Železného kríža'
    , 'Kotleba to opakovane popiera napriek fotografiám a napriek tomu, že to sám Jakubík priznal'
    , 'predseda západoslovenského krajského klubu'
    ])
  , mkGal(
    [ ['jak3.webp', 'Rastislav Jakubík, krajský predseda ĽSNS, mal na hrudi vytetovaný hákový kríž (uprostred veľkého Železného kríža).' ]
    , ['jak0.webp', 'Jakubík s hákovým krížom na hrudi (uprostred veľkého Železného kríža).']
    , ['jak2.webp', 'Aj na tejto fotke má Jakubík hákový kríž na hrudi (uprostred veľkého Železného kríža).']
    , ['https://www.youtube.com/watch?v=TiXCe_k-F9g', 'jak4.webp']
    , ['https://www.youtube.com/watch?v=AowIrtCrowg', 'jak5.webp']
    ])
  ])

mkProfile('durica', 'Ondrej Ďurica', 'hajlujúci hovorca',
    [ mkUL(
      [ 'podľa rozsudku Okresného súdu môžeme Ďuricu nazývať neonacistom - môže si za to sám textami, ktoré spieva [https://bit.ly/2qhjFma] [https://bit.ly/365p8M2]'
      , 'frontman neonacistickej kapely Biely Odpor'
      , 'priložená nahrávka, ako hajluje na koncerte (Biely Odpor Live) [https://vimeo.com/377172660]'
      , 'hovorca ĽSNS, asistent poslanca Schlossára'
      ])
    , mkGal([['https://www.youtube.com/watch?v=ClUOLEO--Fk', 'jak5.webp'], ['https://www.youtube.com/watch?v=n8mIvmGYQts', 'dur1.webp']])
    ])
  
mkProfile('kotleba', 'Marian Kotleba', 'odsúdený za prejav sympatie k fašizmu (6 mesiacov s podm. odkladom na 18 mesiacov)',
    [ mkUL(
      [ 'preverovaný pre podozrenie zo sexuálneho zneužívania (vec bola odmietnutá) [https://dennikn.sk/minuta/1719938/] [https://bit.ly/2rhZjKb]'
      , 'odsúdený (zatiaľ neprávoplatne) na 4 roky a 4 mesiace za založenie, podporu a propagáciu hnutia smerujúceho k potlačeniu základných práv a slobôd (kauza <a href="seky.html">šekov na 1488 eur</a>) [https://bit.ly/2QkeWx3] [https://bit.ly/2VuSX5V] [https://bit.ly/31u3qTc]'
      , '2003-2007 vodca Slovenskej pospolitosti, táto strana bola rozpustená Najvyšším súdom SR'
      , 'predseda ĽSNS, "vocca"'
      ])
    , mkGal(
      [ ['https://www.youtube.com/watch?v=AowIrtCrowg', 'jak5.webp']
      , ['https://www.youtube.com/watch?v=TiXCe_k-F9g', 'jak4.webp']
      , ['https://www.youtube.com/watch?v=ClUOLEO--Fk', 'jak5.webp']
      , ['https://www.youtube.com/watch?v=909fiolMm6g', 'jak5.webp']
      ])
    ])
   
mkProfile('marekkotleba', 'Marek Kotleba', 'vodcov brat, ktorý „nepozná“ neonacistické symboly',
    [ mkUL(
      [ 'trest 500 eur za prečin rozširovania extrémistických materiálov (predával oblečenie s neonacistickými symbolmi) [https://bit.ly/36UWFcj]'
      , 'obhajoba: vraj netušil, že symboly môžu byť spájané s neonacizmom [https://bit.ly/35K8ZvN]'
      ])
    ])
    
mkProfile('grno', 'Anton Grňo', 'odsúdený pre extrémizmus',
    [ mkUL(
      [ 'trest 5000 eur za to, že verejne v budove Najvyššieho súdu pozdravom „Na Stráž“ prejavil sympatie k ideológii ľudáckeho režimu na Slovensku a k Hlinkovej garde [https://bit.ly/3ejAUIu] [https://bit.ly/37zumkl]'
      , 'opakovane šíri nenávistné, rasistické a antisemitské príspevky na Facebooku [https://bit.ly/2GxE2jv] [https://bit.ly/2O5BcGM]'
      ])
    ])

mkProfile('mizik', 'Stanislav Mizík', '„nevie používať počítač“',
    [ mkUL(
      [ 'obžalovaný z prečinu výroby extrémistických materiálov v jednočinnom súbehu s prečinom hanobenie národy, rasy a presvedčenia [https://bit.ly/2PI6lkY]'
      , 'obhajoba: „Nevie používať počítač“ [https://bit.ly/2PI7J6Y] &ndash; iba je odfotený, ako ho používa'
      , 'oblastný predseda pre okresy Revúca, Rožňava'
      ])
    , mkGal(
      [ ['miz1.webp', 'Stanislav Mizík vraj nevie používať počítač.']
      , ['miz3.webp', 'Poslanec ĽSNS, Stanislav Mizík, sa pozerá do počítača. Používať ho nevie.']
      , ['miz2.webp', 'Podľa Stanislava Mizíka ak oceníte „žida“ alebo „ochrancu c*gánov“, museli ste sa zblázniť alebo vedome degradujete slovenské vyznamenania.']
      ])
    ])
   
mkProfile('cuper', 'Ján Cuper', 'ožratý šofér chránený imunitou',
    [ mkUL(
      [ 'v 2005 spôsobil nehodu pod vplyvom alkoholu - chránila ho poslanecká imunita'
      , 'v 2016 kandidoval za ĽSNS'
      , 'bývalý poslanec za ĽS-HZDS, obhajca Ivana Lexu'
      ])
    , mkGal([['https://www.youtube.com/watch?v=m5fE1dILgWs', 'cuper-vid.webp']])
    ])

mkProfile('buchta', 'Michal Buchta', 'odsúdený za šírenie extrémizmu (3 roky podmienečne)',
    [ mkUL(
      [ 'priznal vinu - súd skončil dohodou o vine a treste'
      , 'bývalý okresný predseda ĽSNS'
      , 'niekdajší predseda kotlebovej mládežníckej organizácie - Ľudová mládež'
      , 'asistent poslanca Mizíka'
      ])
    // , mkGal([['https://www.youtube.com/watch?v=m5fE1dILgWs', 'cuper-vid.webp']])
    ])
footer();
