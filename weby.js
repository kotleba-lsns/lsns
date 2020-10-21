var {header, footer, mkP, mkUL, mkGal, mkProfile} = require('./script.js');
DIR = 'img/weby/';

header('weby.html', 'Kotlebovské weby', 'Kotlebovci sa schovávajú za anonymné weby, ktoré sa tvária nezávisle, no v skutočnosti bývajú finančne či personálne prepojené na ĽSNS.');

mkProfile('m1', 'Magazín 1', 'Vidák',
    [ mkUL(
        [ 'Mário Vidák je neúspešný kandidát za ĽSNS [https://bit.ly/2NBMxhi]'
        , 'počas predvolebnej kampane dostával 1000 eur mesačne od ĽSNS na „reklamné a marketingové služby“ [https://bit.ly/2BK2Sha]'
        , 'šíri hoaxy a klamstvá, napríklad že pápež nosí „dúhový kríž“, že Rómovia dostanú brikety zadarmo; o násilníkovi z Číny napísal, že je migrant z Afganistanu [https://bit.ly/38izpqV] [https://bit.ly/2ZfuGBV]'
        ])
    , mkGal(
        [ ['vidak-platby.webp', 'Podľa transparentného účtu ĽSNS je Mário Vidák na ich výplatnej páske.']
        , ['vidak1.webp', '„Nezávislý novinár“ Mário Vidák v tričku strany ĽSNS']
        , ['vidak2.webp', '„Nezávislý novinár“ Mário Vidák kandiduje za ĽSNS']
        , ['brikety.webp', 'Vidák šíril klamstvo, že Rómovia dostanú niečo zadarmo. Nedostanú.']
        , ['afganec.webp', 'Vidák šíri nenávisť voči migrantom. Je to jednoduché: Zdieľate video, kde ktosi napadne ženu a poviete, že to bol afgánsky migrant. Neskôr sa ukáže, že to bolo video z Číny (žiadny migrant), ale koľko ľudí sa to dozvie?']
        ])
    ])

mkProfile('ps', 'Prehľad správ', 'Urban, Vidák, Mišún, Kollár',
    [ mkUL(
        [ 'Marcel Urban je bývalý vodca Pospolitosti a okresný predseda ĽSNS [https://bit.ly/2Bgdm81]'
        , 'hoci je portál anonymný, v jednej sekcii uvádzal, za spracovanie osobných údajov o návštevníkoch webu zodpovedá OZ Alternatívne spravodajstvo, ktorého riaditeľ je Urban'
        , 'v internom redakčnom súbore vystupujú „Vidák“, „Mišún“ a „Kollár“ [https://bit.ly/2Bgdm81] [https://bit.ly/2NBMxhi]'
        ])
    , mkGal(
        [ ['urban.webp', 'Dnes už rozpustená strana Slovenská Pospolitosť. V strede Urban, dnes okresný predseda ĽSNS, vľavo podpredseda ĽSNS Rastislav Schlosár']
        , ['urban2.webp', 'Marcel Urban, bývalý vodca Pospolitosti']
        , ['vidak2.webp', 'Mário Vidák je neúspešný kandidát za ĽSNS']
        , ['misun.webp', 'Marián Mišún, fašistický kandidát č. 87']
        ])
    ])

mkProfile('kb', 'Kulturblog', 'Garčalová, Pastuszek, Pavlík',
    [ mkUL(
        [ 'prepojenie na ĽSNS dlhodobo tajili a tvárili sa ako amatérske videá Lívie'
        , 'Garčalová je členka Ľudovej mládeže, mládežníckej organizácie Kotlebovej ĽSNS [https://bit.ly/3g4gEtC]'
        , 'Pastuszek a Pavlík sú platení asistenti poslanca Mazureka, predtým poslancov Drobného a Beluského (všetci ĽSNS) [https://bit.ly/2CMGR1v] [https://bit.ly/2VsgxR1]'
        , 'Pastuszek za ĽSNS aj kandidoval a je podpredseda prešovskej krajskej organizácie ĽSNS'
        , 'Ľubomír Huďo z relácie Po stopách pravdy je asistent Uhríka (ĽSNS)'
        , 'Huďo je fašista a konšpirátor, ktorý prispieval do Zem&Vek (spočiatku anonymne pod pseudonymom Morés), pre Slobodný vysielač a InfoVojnu [https://bit.ly/3g3UwQ9] [https://bit.ly/2VpmsWU] [https://bit.ly/3eAeulj]'
        ])
    , mkGal(
        [ ['kb-infografika.webp', 'Prepojenia Kulturblogu na ĽSNS']
        , ['pavlik-platby.webp', 'Dávid Pavlík na výplatnej páske ĽSNS.']
        , ['kb-register.webp', 'Výpis z registra OZ Kulturblog - zakladali ho Milan Mazurek (poslanec ĽSNS), Ján Pastuszek a Dávid Pavlík (platení asistenti poslanca Mazureka).']
        , ['pastuszek-kandidat.webp', 'Ján Pastuszek kandidoval za ĽSNS.']
        , ['pastuszek-podpredseda.webp', 'Ján Pastuszek je podpredseda prešovskej krajskej organizácie ĽSNS.']
        , ['hudo.webp', 'Ľubomír Huďo, nácek, konšpirátor, je asistent europoslanca Uhríka.']
        ])
    ])

mkProfile('pj', 'Planéta jednoduchosť', 'Bombič (Danny Kollár), Hrica',
    [ mkUL(
        [ 'Daniel Bombič je fašista, násilník, ktorý vystupuje pod pseudonymom Danny Kollár [https://www.youtube.com/watch?v=Rg3rdp64tDE]'
        , 'mal 3x zadržaný vodičský preukaz, 22 zatknutí, 2x podmienečný trest, 4x alkohol za volantom, viac ako 10x bitka, 200 hodín verejnoprospešných prác [https://bit.ly/31mO6aN]'
        , 'hosť relácii na InfoVojne a Kulturblogu'
        , 'Ľuboš Hrica je Slovák žijúci v Taliansku, ktorý zdieľa anti-imigračný obsah strany Mattea Salviniho [https://bit.ly/2BeEq7u]'
        ])
    , mkGal(
        [ ['bombic.webp', 'Daniel Bombič alias Danny Kollár sa sám a dobrovoľne na FB chváli výpisom z registra trestov.']
        , ['bombic2.webp', 'Daniel Bombič, HĽADANÝ pre napadnutie.']
        , ['https://www.youtube.com/watch?v=Rg3rdp64tDE', 'bombic-video.webp']
        , ['bombic-m.webp', 'Bombič a Mazurek']
        , ['bombic-uhrik.webp', 'Bombič a Uhrík']
        , ['bombic-kb.webp', 'Bombič v reláciach Kulturblogu']
        , ['bombic-iv.webp', 'Bombič na InfoVojne']
        ])
    ])

mkProfile('iv', 'IdemVolit.sk', 'Čičala',
    [ mkUL(
        [ 'šíri klamstvá, dezinformácie a evidentné konšpiračné teórie, prakticky o každom politikovi – okrem Mariana Kotlebu a ĽSNS [https://bit.ly/3dGJuyT] [https://bit.ly/2Zk64Ig]'
        , 'spájajú politikov so satanistickou kabalou'
        , 'používa antisemitskú rétoriku, označuje ľudí za Židov, konšpiruje o riadenej infiltrácii Židov do antisemitských kruhov'
        , 'počas prezidentských volieb porušovali moratórium'
        , 'Čičala prispieval aj na stránky ako Infovojna alebo Hlavné správy [https://bit.ly/2ZhI0pD]'
        ])
    , mkGal(
        [ ['idem-kabala.webp', 'Bububu, satanistická Kabala. Počúvajte uja Čičalu, ten vám povie, kto je satanista.']
        , ['idem-islam.webp', 'IdemVolit.sk varuje: SMER a SNS chcú islamizáciu Slovenska! Dôkaz: Danko aj Pellegrini si podali ruku s nejakým pánom.'] 
        , ['idem-danko.webp', 'Antisemitizmus na IdemVolit.sk: Podľa Čičalu sú všetci židia a to je zle.']
        , ['idem-hviezdy.webp', 'Perly ducha od uja Čičalu: Hviezdičky na americkej zástave sú vraj symbolom židovského štátu.']
        ])
    ])

mkProfile('hs', 'Hlavné správy', 'Sopko',
    [ mkUL(
        [ 'ĽSNS si u firmy blízkej Hlavným správam objednala reklamu za 6700 eur (Harabin za takmer 4300 a SNS viac ako 14000)'
        , 'podľa Threemy bol „akcionárom“ Hlavných správ Kočner, ktorý im posielal peniaze (mafián odsúdený za falšovanie zmeniek, súdený za vraždu Jána a Martiny) [https://bit.ly/31mVqmN]'
        , 'šéfredaktor Sopko to popieral, ale usvedčila ho Whatsup komunikácia, ktorá sa našla v Kočnerovom mobile; Kočnerovi napísal: „Dík aj za podporu, čo došla na účet.“ [https://bit.ly/2CKETid]'
    //       https://dennikn.sk/521950/kto-riadi-prorusky-web-hlavne-spravy-muz-ktory-neodmieta-ani-eurofondy-2/?ref=in
    //       https://dennikn.sk/476132/pat-prikladov-alternativne-weby-ohybaju-pravdu/?ref=in
        ])
    , mkGal(
        [ ['sopko-platby.webp', 'ĽSNS platila podľa jej transparentného účtu za reklamné služby firme Heureka Evolution s.r.o. To je firma šéfredaktora Hlavných správ Roberta Sopka.' ]
        ])
    ])

footer();
