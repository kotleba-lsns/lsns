var {header, footer, mkP, mkUL, mkGal, mkItm} = require('./script.js');
DIR = 'img/seky/';

header('seky.html', 'Šeky na 1488eur', 'Všetko, čo ste chceli vedieť o Kotlebovych šekoch, ale báli ste sa opýtať.');

mkItm('Čo je na tom, že finančne pomohol rodinám?', //  Je jediný, koho súdia za pomoc?
    [ mkP('Kotlebu nikto nesúdi za finančnú pomoc &ndash; to len Kotleba chce, aby si to ľudia mysleli. Kotleba bol odsúdený za šírenie neonacistickej symboliky, resp. propagáciu "hnutia smerujúceho k potlačeniu základných práv a slobôd" &ndash; a to je trestné.')
    , mkP('Predstavte si, že by Kotleba pri odovzdávaní šeku vztýčil pravicu a zvolal "Heil Hitler". Obdarovaní by asi neboli nadšení z celého toho divadla - no a presne to Kotleba spravil, len trochu skrytejšie. Číslo 88 znamená "Heil Hitler".')
    , mkGal(['kotleba1488a.webp', 'kotleba1488b.webp'])
    ])

mkItm('Ako môžete niekoho odsúdiť za číslo?',
    [ mkP('Je to propagácia fašizmu. Môžu niekoho odsúdiť za "kresbu"? (Napríklad hákový kríž.) Môžu niekoho odsúdiť za gesto? (Napríklad hajlovanie.)')
    , mkP('Sloboda prejavu je na Slovensku obmedzená. Trestné je napríklad šírenie poplašnej správy, ohováranie, hanobenie národa, rasy, či presvedčenia a aj ... propagácia fašizmu.')
    ])

mkItm('Ako môžeme vedieť, ako to Kotleba myslel?',
    [ mkP('<img src="img/seky/gesto.webp" style="width: 30%; min-width: 150px; float: left; margin: 20px; ">Predstavte si, že idete po ulici a tam dáky rozčúlený chlapík bliaka, nadáva, čertí sa a na konci ukáže obscénne gesto na obrázku. Asi je jasné, čo tým myslí. ' +
            'Na druhý deň ho však zbadáte v obleku ako vysvetľuje, že on to tak vôbec nemyslel - on tým myslel japonské gesto, keď si človek poťapká po bicepse a znamená to ODVAHU a ODHODLANOSŤ. ' +
            'V Japonsku to gesto vôbec nie je neslušné. A o iných významoch nemal potuchy.')
    , mkP('Hovorí sa tomu <b>kontext</b>. Je pravda, že niektoré gestá majú rôzne významy v rôznych kultúrach a je pravda, že významy sa môžu v čase meniť - ide predsa o jazyk a to je živá vec. ' +
            'Lenže rovnako je jasné, že ten chlapík, čo bliakal na ulici nebol Japonec, nehovoril po japonsky a už vôbec nebol slušný. Tak to asi nebude japonské gesto odhodlanosti. ' +
            ' A rovnako je jasné, že keď hajlujúci náckovia potetovaní hákovými krížmi (áno, myslím kotlebovcov), ktorí bežne recitujú 14 slov a na FB píšu chválospevy na Hitlera a Tisa (áno, myslím kotlebovcov) ' +
            'a ich generátor náhodných čísel vracia stále len 88 (áno, myslím kotlebovcov), pre ktorých je 88 "feng šuej dobré číslo, absolútne dobro" sami priznávajú, že sumu 1488 zvolili úplne naschvál ' +
            '&ndash; tak je úplne jasné, čo tým mysleli. A nebolo to "Ďobe Ďateľ".')
    ])

mkItm('Nebola to náhoda?',
    [ mkP('Sami kotlebovci na začiatku vraveli, že to presne tak plánovali &ndash; aby "nachytali" médiá, ktoré o tom budú písať.')
    , mkP('Túto neonacistickú symboliku použili toľkokrát, že je vylúčené, že ide iba o náhodu. [https://www.aktuality.sk/clanok/795726/14-nahod-v-kariere-mariana-kotlebu/] ' +
        'V internetovom obchode KKK anglická móda mali akciu 8.8% pri nákupe nad 1488 korún, akciu obušok zdarma pri nákupe nad 8818 (18 sú písmená AH ako Adolf Hitler), členovia Slovenskej pospolitosti mali zľavu 8.8%. ')
    , mkP('Navyše hokejisti z Veľkého Krtíša, ktorí dostali od Kotlebu ako župana podporu potvrdili, že žiadali 1500eur a nechápu, prečo dostali práve 1488.')
    , mkP('Keď zase Spolok westernových strelcov žiadal o dotáciu okolo 900eur, dostali presne 777 &ndash; teda číslo, ktoré symbolizuje trojhranný hákový kríž (tzv. triskelión).')
    , mkP('Pre doplnenie kontextu: Kotleba šeky odovzdával 14. marca, teda v deň, keď si kotlebovci pripomínajú vznik vojnového Slovenského štátu. V miestnosti visel obraz Jozefa Tisa, ktorého adorujú.')
    , mkGal(['nahoda1.webp', 'nahoda2.webp', 'kkk.webp', 'hokej.webp', '777.webp'])
    ])

mkItm('A čo Lasicov honorár? A čo ponožky za 14,88eur? A veľa iných príkladov?',
    [ mkP('Samotné čísla nemajú žiaden význam &ndash; ak by bol Lasicov honorár 1984eur, asi nikto by v tom nevidel odkaz na Orwella a ak by balík ponožiek stál 69eur, asi nikto nebude predajcu obviňovať, že má na mysli sexuálnu pozíciu.')
    , mkP('Čísla môžu nadobúdať význam až v nejakom kontexte. V týchto absurdných príkladoch, kde všade sa vyskytuje číslo 1488, prípadne 88, chýba <b>kontext</b>.')
    , mkP('Naopak, keď prišiel Kotleba na súd v rúšku s číslom 1984, je zrejmé, čo tým myslel a že to nie je náhodné číslo. Predtým o Orwellovej knihe rozprával a upozorňoval, že "toto sa deje". ' +
            '(Iróniou osudu je, že samotný Orwell bol veľký antifašista a s Kotlebom by nesúhlasil.)')
    ])

mkItm('Čo znamená 1488?',
    [ mkP('Neonacisti po celom svete používajú číslo 88 v zmysle "Heil Hitler", pretože H je ôsme písmeno abecedy. Ak o tom pochybujete, skúste vysvetliť, prečo má potom toľko fašistov vytetované číslo 1488 vedľa hákového kríža?'),
    , mkP('Číslo 14 zase odkazuje na 14 slov Davida Lana: We must secure the existence of our people and a future for White children. (Musíme zabezpečiť existenciu našich ľudí a budúcnosť bielych detí.)')
    , mkGal(['1488a.webp', '1488b.webp', '1488c.webp', '1488d.webp', '1488e.webp', '1488f.webp', '1488g.webp', '1488h.webp', '1488i.webp', '1488-sp.webp', '88a.webp', '88b.webp', 'allgier.webp'])
    ])

mkItm('Kto je David Lane?',
    [ mkUL(
        [ 'spoluzakladateľ neonacistickej teroristickej skupiny The Order (Rád; známej tiež ako Tiché bratstvo či Árijské hnutie odporu) [https://en.wikipedia.org/wiki/The_Order_(white_supremacist_group)]'
        , 'odsúdený na 190 rokov za spoluúčasť na vražde Alana Berga a ďalšie trestné činy [https://en.wikipedia.org/wiki/David_Lane_(white_supremacist)]; zomrel v 2007 vo väzení'
        , 'Rád získaval peniaze z bankových lúpeží, prepadov obrnených automobilov a falšovania peňazí; 16 členov bolo odsúdených [https://en.wikipedia.org/wiki/The_Order_(white_supremacist_group)]'
        , 'autor 14 slov: We must secure the existence of our people and a future for White children. (Musíme zabezpečiť existenciu našich ľudí a budúcnosť bielych detí.)'
        , 'taktiež je autorom 14 bodov a diela 88 predpisov; svoje pamflety vydával cez vydavatelstvo 14 Word Press'
        // Ľudia, ktorí dovolia inej rase žiť spoločne s nimi, zaniknú, pretože nevyhnutným výsledkom rasovej integrácie je kríženie rás medzi sebou, ktoré ničí jedinečnosť a exkluzivitu rasy
        ])
    , mkGal(['lane1.webp', 'lane2.webp'])
    ])

//   , mkItm('To teraz odsúdime každého, kto bude oslavovať 88 rokov?', [])
mkItm('Vedia kotlebovci, čo znamená 1488?',
    [ mkP('Neonacistický spevák Ďurica (dnes hovorca strany), ktorý na akcii vystupoval, na súde uviedol, že extrémistické symboly (ako 1488) pozná preto, že bol donedávna dôstojníkom v Ozbrojených silách SR. [https://bit.ly/3nSdQog]')
    , mkP('Kotlebov brat Marek bol odsúdený za rozširovanie extrémistických materiálov. Fašista Marián Magát o 88. mieste na kandidátke ĽSNS povedal „bolo to na naše želanie troška“ a kandidátka Garelová mu kontruje, že „88 je feng šuej dobré číslo“ a „absolútne dobro“.')
    , mkP('Uhrík v TV povedal, že že „musíme chrániť budúcnosť bielych detí“ [https://spravy.pravda.sk/domace/clanok/431729-milana-uhrika-nebudu-stihat-za-vyrok-o-buducnosti-bielych-deti/] a poslanec Krupa na FB cituje 14 slov.')
    , mkGal(['krupa14.webp', 'uhrik14.webp', 'mag4.webp'])
    ])

footer();
