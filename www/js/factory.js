app
.factory('Questions', function() {

  var data = {
    1: ["agere, ago, egi, actum, tun, treiben, handeln", "audire, audio, audivi, auditum, hören", "esse, sum, fui, -, sein", "invenire, invenio, inveni, inventum, finden, erfinden", "iuvare, iuvo, iuvi, iutum, Spaß machen", "ludere, ludo, lusi, lusum, spielen", "reprehendere, reprehendo, reprehendi, reprehensum, tadeln", "respondere, respondeo, respondi, responsum, antworten", "sedere, sedeo, sedi, sessum, sitzen", "tacere, taceo, tacui, tacitum, schweigen", "venire, venio, veni, ventum, kommen", "videre, video, vidi, visum, sehen"],
    2: ["adiuvare, adiuvo, adiuvi, adiutum, unterstützen, helfen", "cupere, cupio, cupivi, cupitum, wünschen", "currere, curro, cucurri, cursum, laufen, rennen", "debere, debeo, debui, debitum, müssen, schulden", "fugere, fugio, fugi, -, fliehen, flüchten", "habere, habeo, habui, habitum, haben, halten", "rapere, rapio, rapui, raptum, rauben, reißen", "ridere, rideo, risi, risum, lachen", "sumere, sumo, sumpsi, sumptum, nehmen, zu sich nehmen"],
    3: ["adesse, adsum, adfui, -, da sein, helfen", "capere, capio, cepi, captum, fassen, nehmen, fangen", "considere, consido, consedi, consessum, sich hinsetzen", "dicere, dico, dixi, dictum, sagen, sprechen", "dormire, dormio, dormivi, dormitum, schlafen", "incipere, incipio, coepi, inceptum, anfangen", "irridere, irrideo, irrisi, irrisum, auslachen, verspotten", "legere, lego, legi, lectum, lesen", "monere, moneo, monui, monitum, erinnern, ermahnen, warnen", "scribere, scribo, scripsi, scriptum, schreiben", "timere, timeo, timui, -, fürchten, Angst haben vor"],
    4: ["accedere, accedo, accessi, accessum, herangehen, hingehen", "colligere, colligo, collegi, collectum, sammeln", "conspicere, conspicio, conspexi, conspectum, erblicken", "gaudere, gaudeo, gavisus sum, sich freuen", "intellegere, intellego, intellexi, intellectum, verstehen, einsehen, bemerken", "pergere, pergo, perrexi, perrectum weitergehen, weitermachen", "tangere, tango, tetigi, tactum, berühren"],
    5: ["cadere, cado, cecidi, -, fallen", "caedere, caedo, cecidi, caesum, fällen, töten", "condere, condo, condidi, conditum, bergen, verwahren, gründen", "facere, facio, feci, factum, machen, tun"],
    6: ["accipere, accipio, accepi, acceptum, annehmen, bekommen, empfangen", "adducere, adduco, adduxi, adductum, heranführen, veranlassen", "aperire, aperio, aperui, apertum, öffnen", "dare, do, dedi, datum, geben", "ducere, duco, duxi, ductum, führen, glauben, halten für", "fallere, fallo, fefelli, -, betrügen, enttäuschen"],
    7: ["amittere, amitto, amisi, amissum, verlieren, aufgeben", "canere, cano, cecini, -, singen, ertönen (lassen)", "contendere, contendo, contendi, contentum, sich anstrengen, eilen, behaupten", "crescere, cresco, crevi, cretum, wachsen", "iacere, iaceo, iacui, -, liegen", "mittere, mitto, misi, missum, schicken, loslassen, werfen", "petere, peto, petivi, petitum, suchen, aufsuchen, angreifen, bitten, verlangen", "scire, scio, scivi, scitum, wissen", "sinere, sino, sivi, situm, lassen, zulassen", "surgere, surgo, surrexi, surrectum, aufstehen, sich erheben", "vincere, vinco, vici, victum, siegen, besiegen", "vivere, vivo, vixi, -, leben"],
    8: ["alere, alo, alui, altum, ernähren", "arcessere, arcesso, arcessivi, arcessitum, holen", "confidere, confido, confisus sum, vertrauen", "consulere, consulo, consului, consultum, um Rat fragen, beraten, beschließen, sorgen für", "deesse, desum, defui, -, fehlen, im Stich lassen", "defendere, defendo, defendi, defensum, abwehren, verteidigen", "favere, faveo, favi, fautum, unterstützen, begünstigen", "iubere, iubeo, iussi, iussum, auffordern, befehlen", "recipere, recipio, recepi, receptum, annehmen, zurücknehmen", "tradere, trado, tradidi, traditum, übergeben, überliefern", "valere, valeo, valui, -, gesund sein, stark sein, gelten", "vendere, vendo, vendidi, venditum, verkaufen"],
    9: ["deponere, depono, deposui, depositum, niederlegen, ablegen, in Verwahrung geben", "emere, emo, emi, emptum, kaufen", "exercere, exerceo, exercui, exercitum, bewegen, üben", "placere, placeo, placui, placitum, gefallen", "quaerere, quaero, quaesivi, quaesitum, suchen, fragen", "reperire, reperio, repperi, repertum, finden, wiederfinden"],
    10: ["apparere, appareo, apparui, -, erscheinen, sich zeigen", "consistere, consisto, constiti, -, stehen bleiben, anhalten, sich aufstellen", "credere, credo, credidi, creditum, glauben, anvertrauen", "custodire, custodio, custodivi, custoditum, bewachen", "decipere, decipio, decepi, deceptum, betrügen", "frangere, frango, fregi, fractum, zerbrechen", "manere, maneo, mansi, -, bleiben, warten, erwarten", "minuere, minuo, minui, minutum, vermindern, verringern", "parere, pareo, parui, -, gehorchen", "punire, punio, punivi, punitum, bestrafen", "relinquere, relinquo, reliqui, relictum, zurücklassen, verlassen", "removere, removeo, removi, remotum, entfernen, wegschaffen", "stare, sto, steti, -, stehen", "trahere, traho, traxi, tractum, ziehen, schleppen"],
    11: ["accidere, accido, accidi, -, sich ereignen, geschehen", "praebere, praebeo, praebui, praebitum, geben, hinhalten, zeigen", "tenere, teneo, tenui, tentum, haben, festhalten"],
    12: ["abire, abeo, abii, abitum, weggehen", "afficere, afficio, affeci, affectum, versehen mit", "decernere, decerno, decrevi, decretum, entscheiden, beschließen", "diligere, diligo, dilexi, dilectum, schätzen, lieben", "inire, ineo, inii, initum ,hineingehen, anfangen", "interire, intereo, interio, interitum, untergehen, umkommen", "ire, eo, ii, itum, gehen", "praeterire, praetereo, praeterii, praeteritum, vorbeigehen, übergehen", "regere, rego, rexi, rectum, lenken, beherrschen", "volvere, volvo, volvi, volutum≤ wälzen, rollen"],
    13: ["arripere, arripio, arripui, arreptum, ergreifen, packen", "aspicere, aspicio, aspexi, aspectum, anschauen", "movere, moveo, movi, motum, bewegen", "neglegere, neglego, neglexi, neglectum, nicht beachten, vernachlässigen", "pendere, pendeo, pependi, -, hängen, herabhängen", "perterrere, perterreo, perterrui, -, heftig erschrecken", "reddere, reddo, reddidi, redditum, zurückgeben, machen zu"],
    14: ["admovere, admoveo, admovi, admotum, heranschaffen, in die Nähe bringen", "advenire, advenio, adveni, adventum, ankommen", "animadvertere, animadverto, animadverti, animadversum, bemerken", "dividere, divido, divisi, divisum, teilen, trennen", "imponere, impono, imposui, impositum, darauflegen, auferlegen", "incendere, incendo, incendi, incensum, anzünden", "interficere, interficio, interfeci, interfectum, töten", "metuere, metuo, metui, -, fürchten, sich fürchten", "perficere, perficio, perfeci, perfectum, vollenden, erreichen"],
    15: ["constituere, constituo, constitui, constitutum, aufstellen, festsetzen, beschließen", "edere, edo, edidi, editum, hervorbringen, bekannt geben", "imminere, immineo, -, -, drohen, bevorstehen", "instituere, instituo, institui, institutum, beginnen, einrichten, unterrichten", "parere, pario, peperi, partum, hervorbringen, erwerben", "prohibere, prohibeo, prohibui, prohibitum, abhalten, hindern", "ruere, ruo, rui, rutum, eilen, stürmen, stürzen", "tendere, tendo, tetendi, tentum, spannen, ausstrecken, sich anstrengen"],
    16: ["carere, careo, carui, -, entbehren, nicht haben", "delere, deleo, delevi, deletum, zerstören, vernichten", "dolere, doleo, dolui, -, traurig sein, Schmerz empfinden, bedauern", "persuadere, persuadeo, persuasi, persuasum, überreden, überzeugen", "redire, redeo, redii, reditum, zurückkehren", "velle, volo, volui, -, wollen"],
    17: ["commovere, commoveo, commovi, commotum, bewegen, veranlassen", "convenire, convenio, conveni, conventum, zusammenkommen", "effugere, effugio, effugi, -, entkommen", "invadere, invado, invasi, invasum, eindringen, überfallen", "munire, munio, munivi, munitum, schützen, befestigen", "resistere, resisto, restiti, -, stehen bleiben, Widerstand leisten"],
    18: ["abesse, absum, afui, -, fehlen", "cedere, cedo, cessi, cessum, gehen, nachgeben", "cernere, cerno, crevi, cretum, wahrnehmen, erkennen, entscheiden", "descendere, descendo, descendi, -, herabsteigen", "gerere, gero, gessi, gestum, tragen, führen, ausführen", "patere, pateo, patui, -, offen stehen, sich erstrecken", "providere, provideo, providi, provisum, vorhersehen, sorgen für"],
    19: ["constat, constitit, -, -, es steht fest, dass", "demittere, demitto, demisi, demissum, hinabschicken, sinken lassen", "exponere, expono, exposui, expositum, aussetzen, darlegen", "instruere, instruo, instruxi, instructum, aufstellen, ausrüsten, unterrichten", "occidere, occido, occidi, occisum, erschlagen, töten", "oportet, oportuit, -, -, es ist nötig", "ostendere, ostendo, ostendi, ostentum, zeigen, erklären", "pervenire, pervenio, perveni, perventum, hinkommen", "repetere, repeto, repetivi, repetitum, zurückverlangen, wiederholen", "restituere, restituo, restitui, restitutum, wiederherstellen", "videri, videor, visus sum, scheinen"],
    20: ["conicere, conicio, conieci, coniectum, werfen, vermuten", "convertere, converto, converti, conversum, umwenden, verändern", "exstinguere, exstinguo, exstinxi, exstinctum, auslöschen", "fungi, fungor, functus sum, -, ausüben", "hortari, hortor, hortatus sum, -, ermahnen, auffordern", "loqui, loquor, locutus sum, -, sprechen, sagen", "oriri, orior, ortus sum, -, sich erheben, entstehen", "sequi, sequor, secutus sum, -, folgen", "solvere, solvo, solvi, solutum, -, lösen, zahlen"],
    21: ["arbitrari, arbitror, arbitratus sum, -, glauben, meinen, halten für", "audere, audeo, ausus sum, -, wagen", "expellere, expello, expuli, expulsum, vertreiben, verbannen", "labi, labor, lapsus sum, -, gleiten, fallen", "oboedire, oboedio, oboedivi, oboeditum, gehorchen", "proficisci, proficiscor, profectus sum, -, aufbrechen, reisen, marschieren", "solere, soleo, solitus sum, -, gewohnt sein, gewöhnlich etw. tun", "suspicari, suspicor, suspicatus sum, -, vermuten, einen Verdacht haben"],
    22: ["cavere, caveo, cavi, cautum, sich hüten", "circumdare, circumdo, circumdedi, circumdatum, herumlegen, umgeben", "claudere, claudo, clausi, clausum, schließen, einschließen", "educere, educo, eduxi, eductum, herausführen", "mirari, miror, miratus sum, -, sich wundern, bewundern", "pellere, pello, pepuli, pulsum, stoßen, schlagen, vertreiben", "perire, pereo, perii, -, umkommen, zugrunde gehen", "permittere, permitto, permisi, permissum, erlauben, überlassen", "polliceri, polliceor, pollicitus sum, -, versprechen", "ponere, pono, posui, positum, setzen, stellen, legen", "reri, reor, ratus sum, -, meinen", "statuere, statuo, statui, statutum, aufstellen, festsetzen, beschließen", "traicere, traicio, traieci, traiectum, hinüberbringen, überqueren"],
    23: ["adimere, adimo, ademi, ademptum wegnehmen", "admonere, admoneo, admonui, admonitum, ermahnen, erinnern", "comperire, comperio, comperi, compertum, erfahren", "egere, egeo, egui, -, brauchen, nötig haben", "mori, morior, mortuus sum, -, sterben"],
    24: ["adhibere, adhibeo, adhibui, adhibitum, hinwenden, anwenden, hinzuziehen", "cogere, cogo, coegi, coactum, versammeln, zwingen", "efficere, efficio, effeci, effectum, bewirken, herstellen, durchführen", "exire, exeo, exii, exitum, herausgehen, weggehen", "iungere, iungo, iunxi, iunctum, verbinden, anschließen", "morari, moror, moratus sum, -, sich aufhalten, zögern", "nocere, noceo, nocui, nocitum, Unheil anrichten, schaden", "parcere, parco, peperci, -, sparen, verschonen", "pati, patior, passus sum, -, leiden, ertragen, zulassen", "poscere, posco, poposci, -, fordern, verlangen", "praestare, praesto, praestiti, -, übertreffen, leisten, zeigen", "subicere, subicio, subieci, subiectum, darunter legen, unterwerfen"],
    25: ["adire, adeo, adii, aditum, herantreten, bitten", "aggredi, aggredior, aggressus sum, -, angreifen, herangehen", "censere, censeo, censui, censum, -, meinen, einschätzen, beschließen", "concurrere, concurro, concurri, concursum, zusammenlaufen, zusammenstoßen", "dissentire, dissentio, dissensi, dissensum, anderer Meinung sein, nicht übereinstimmen", "disserere, dissero, disserui, dissertum, sprechen, darlegen", "fateri, fateor, fassus sum, -, bekennen, eingestehen", "mentiri, mentior, mentitus sum, -, lügen", "nescire, nescio, nescivi, -, nicht wissen", "obicere, obicio, obieci, obiectum, vorwerfen, entgegenwerfen", "sentire, sentio, sensi, sensum, fühlen, wahrnehmen, meinen", "versari, versor, versatus sum, -, sich aufhalten, sich mit etw. beschäftigen"],
    26: ["consentire, consentio, consensi, consensum, übereinstimmen, zustimmen", "corrumpere, corrumpo, corrupi, corruptum, verderben, bestechen", "dedere, dedo, dedidi, deditum, ausliefern, übergeben", "desistere, desisto, destiti, -, aufhören", "eligere, eligo, elegi, electum, auswählen", "evenire, evenio, eveni, eventum, herauskommen, sich ereignen", "instare, insto, institi, -, bedrängen, bevorstehen", "invidere, invideo, invidi, invisum, beneiden, Böses wollen", "studere, studeo, studui, -, sich bemühen um, sich geistig betätigen", "uti, utor, usus sum, -, benutzen, gebrauchen"],
    27: ["cognoscere, cognosco, cognovi, cognitum, kennen lernen, erkennen, erfahren", "colere, colo, colui, cultum, pflegen, verehren", "comprehendere, comprehendo, comprehendi, comprehensum, begreifen, ergreifen, festnehmen", "consequi, consequor, consecutus sum, -, erreichen, nachfolgen", "docere, doceo, docui, doctum, lehren, unterrichten", "fingere, fingo, finxi, fictum, gestalten, formen, sich ausdenken", "frui, fruor, fruitus sum, -, genießen", "imitari, imitor, imitatus sum, -, nachahmen", "occurrere, occurro, occurri, occursum, begegnen, entgegentreten", "perdere, perdo, perdidi, perditum, verlieren, zugrunde richten", "praecipere, praecipio, praecepi, praeceptum, vorschreiben, lehren"],
    28: ["decet, decuit, -, -, es gehört sich", "discere, disco, didici, -, lernen, erfahren", "eripere, eripio, eripui, ereptum, entreißen, herausreißen", "nasci, nascor, natus sum, geboren werden, entstehen", "novisse, novi, notum, wissen, kennen", "praeesse, praesum, praefui, -, leiten, verwalten", "precari, precor, precatus sum, -, beten, bitten, wünschen", "rumpere, rumpo, rupi, ruptum, zerbrechen, zerreißen"],
    29: ["adipisci, adipiscor, adeptus sum, -, erlangen", "augere, augeo, auxi, auctum, vermehren, vergrößern", "conari, conor, conatus sum, -, versuchen", "concedere, concedo, concessi, concessum, nachgeben, zugestehen", "conficere, conficio, confeci, confectum, herstellen, beenden", "dimittere, dimitto, dimisi, dimissum, aufgeben, entlassen", "iacere, iacio, ieci, iactum, werfen", "ingredi, ingredior, ingressus sum, -, hineingehen, betreten", "interesse, intersum, interfui, -, dazwischen sein, teilnehmen", "obstare, obsto, obstiti, -, entgegenstehen, hinderlich sein", "praemittere, praemitto, praemisi, praemissum, vorausschicken"],
    30: ["ardere, ardeo, arsi, -, brennen", "avertere, averto, averti, aversum, abwenden, abwehren", "componere, compono, composui, compositum, zusammenstellen, ordnen", "conscribere, conscribo, conscripsi, conscriptum, aufschreiben, verfassen", "differre, differo, distuli, dilatum, aufschieben, sich unterscheiden", "ferre, fero, tuli, latum, tragen, ertragen, berichten", "inferre, infero, intuli, illatum, hineintragen", "offerre, offero, obtuli, oblatum, anbieten", "perferre, perfero, pertuli, perlatum, durchführen, ertragen, berichten", "perspicere, perspicio, perspexi, perspectum, durchschauen, erkennen", "praeferre, praefero, praetuli, praelatum, vorziehen, vorantragen", "referre, refero, rettuli, relatum, zurückbringen, berichten", "servire, servio, servivi, servitum, dienen"],
    31: ["adicere, adicio, adieci, adiectum, hinzufügen", "appetere, appeto, appetivi, appetitum, haben wollen, erstreben, angreifen", "committere, committo, commisi, commissum, veranstalten, begehen, anvertrauen", "finire, finio, finivi, finitum, beenden", "implere, impleo, implevi, impletum, anfüllen, ausfüllen", "malle, malo, malui, -, lieber wollen", "nolle, nolo, nolui, -, nicht wollen", "oblivisci, obliviscor, oblitus sum, -, vergessen", "opprimere, opprimo, oppressi, oppressum, unterdrücken, überfallen", "reducere, reduco, reduxi, reductum, zurückführen, zurückziehen", "suscipere, suscipio, suscepi, susceptum, übernehmen, unternehmen", "tollere, tollo, sustuli, sublatum, hochheben, aufheben, beseitigen"],
    32: ["assequi, assequor, assecutus sum, -, erreichen", "complere, compleo, complevi, completum, ausfüllen, erfüllen", "conferre, confero, contuli, collatum, zusammenbringen, vergleichen, beitragen", "contingere, contingo, contigi, contactum, berühren, zuteil werden", "discedere, discedo, discessi, discessum, auseinander gehen, weggehen", "excipere, excipio, excepi, exceptum, aufnehmen, eine Ausnahme machen", "fieri, fio, factus sum, -, geschehen, gemacht werden", "laedere, laedo, laesi, laesum, verletzen, beleidigen", "noscere, nosco, novi, notum, kennen lernen, erkennen", "queri, queror, questus sum, -, klagen, sich beschweren", "reverti, revertor, reverti, reversum, -, zurückkehren", "suadere, suadeo, suasi, suasum, -, überreden, raten", "tueri, tueor, tutatus sum, -, anschauen, beschützen", "ulcisci, ulciscor, ultus sum, -, rächen, strafen"],
    33: ["coercere, coerceo, coercui, coercitum, zusammenhalten, zügeln", "deducere, deduco, deduxi, deductum, hinführen, wegführen", "flectere, flecto, flexi, flexum, beugen, lenken, umstimmen", "flere, fleo, flevi, fletum, weinen, beklagen", "potiri, potior, potitus sum, -, erlangen", "prodere, prodo, prodidi, proditum, überliefern, verraten", "progredi, progredior, progressus sum, -, vorrücken, weitergehen", "promittere, promitto, promisi, promissum, versprechen", "sustinere, sustineo, sustinui, -, aushalten"],
    34: ["accendere, accendo, accendi, accensum, anzünden", "addere, addo, addidi, additum, hinzufügen", "auferre, aufero, abstuli, ablatum, wegtragen, entfernen", "deligere, deligo, delegi, delectum, auswählen", "diripere, diripio, diripui, direptum, zerstören, plündern", "miscere, misceo, miscui, mixtum, mischen", "niti, nitor, nisus sum, -, sich anstrengen, sich stützen", "procedere, procedo, processi, processum, vorwärtsgehen, vorrücken", "prodesse, prosum, profui, -, nützlich sein, nützen", "retinere, retineo, retinui, retentum, zurückhalten, festhalten"],
    35: ["circumvenire, circumvenio, circumveni, circumventum, umringen, umzingeln", "fundere, fundo, fudi, fusum, gießen, vertreiben", "impellere, impello, impuli, impulsum, antreiben, veranlassen", "tegere, tego, texi, tectum, bedecken, schützen", "terrere, terreo, terrui, territum, erschrecken", "vertere, verto, verti, versum, drehen, wenden", "vincire, vincio, vinxi, vinctum, fesseln"],
    36: ["attingere, attingo, attigi, attactum, berühren, erwähnen", "consumere, consumo, consumpsi, consumptum, verbrauchen", "detrahere, detraho, detraxi, detractum, wegnehmen, abziehen", "erigere, erigo, erexi, erectum, aufrichten, errichten", "intermittere, intermitto, intermisi, intermissum, unterbrechen", "merere, mereo, merui, meritum, oder", "mereri, mereor, meritus sum, -, verdienen, erwerben", "omittere, omitto, omisi, omissum, aufgeben, unerwähnt lassen", "perducere, perduco, perduxi, perductum, hinführen, leiten", "pudet me, puduit me, -, -, ich schäme mich", "remittere, remitto, remisi, remissum, zurückschicken, loslassen", "superesse, supersum, superfui, -, überleben, übrig sein", "vehere, veho, vexi, vectum, führen, fahren", "visere, viso, visi, visum, ansehen, besuchen"],
    37: ["coniungere, coniungo, coniunxi, coniunctum, verbinden, vereinigen", "erudire, erudio, erudivi, eruditum, unterrichten", "florere, floreo, florui, -, blühen", "intendere, intendo, intendi, intentum, spannen, richten, beabsichtigen", "pertinere, pertineo, pertinui, -, sich erstrecken, sich beziehen", "tribuere, tribuo, tribui, tributum, zuteilen"],
    38: ["adiungere, adiungo, adiunxi, adiunctum, anfügen", "admittere, admitto, admisi, admissum, zulassen", "consuescere, consuesco, consuevi, consuetum≤ sich gewöhnen", "deferre, defero, detuli, delatum, übertragen, mitteilen", "disponere, dispono, disposui, dispositum, einrichten, ordnen", "possidere, possideo, possedi, possessum, besitzen", "succedere, succedo, successi, successum, nachfolgen, gelingen"],
    39: ["abstinere, abstineo, abstinui, abstentum, fern halten, sich enthalten", "bibere, bibo, bibi, -, trinken", "contemnere, contemno, contempsi, contemptum, nicht beachten, geringschätzen", "excedere, excedo, excessi, excessum, hinausgehen, weggehen", "exigere, exigo, exegi, exactum, hinaustreiben, vollenden, fordern", "ignoscere, ignosco, ignovi, ignotum, verzeihen", "impedire, impedio, impedivi, impeditum, hindern, verhindern", "inducere, induco, induxi, inductum, hineinführen, verleiten", "offendere, offendo, offendi, offensum, verletzen, beleidigen", "subire, subeo, subii, subitum, herangehen, auf sich nehmen", "traducere, traduco, traduxi, traductum, hinüberführen", "vetare, veto, vetui, vetitum, verbieten"],
    40: ["continere, contineo, continui, contentum, festhalten, umfassen, enthalten", "decedere, decedo, decessi, decessum, weggehen, ausweichen", "deficere, deficio, defeci, defectum, fehlen, schwinden", "deserere, desero, deserui, desertum, verlassen, im Stich lassen", "egredi, egredior, egressus sum, -, hinausgehen", "gignere, gigno, genui, genitum, hervorbringen, zeugen, gebären", "nancisci, nanciscor, nactus sum, -, bekommen, antreffen", "obtinere, obtineo, obtinui, obtentum, im Besitz haben, festhalten", "praetermittere, praetermitto, praetermisi, praetermissum, vorbeigehen lassen, übergehen", "requirere, requiro, requisivi, requisitum, erforschen, aufsuchen, verlangen", "transferre, transfero, transtuli, translatum, hinüberbringen, übertragen", "transire, transeo, transii, transitum, hinübergehen, vorbeigehen"]
  }


  return {

    getLektion: function (lektion) {
      lektion = parseInt(lektion)
      return data[lektion]
    },

    getAll: function() {
      var allQ = []
      for (key in data) {
        allQ = allQ.concat(data[key])
      };
      return allQ
    },

    getRaw: function() {
      return data
    },

    getArrayOfLektionNumbers: function() {
      var arrOfLektionNumbers = []

      angular.forEach(this.getRaw(), function (val, key) {
        arrOfLektionNumbers.push(parseInt(key))
      })

      return arrOfLektionNumbers
    },

    getArrayOfLektionNumbersAsStrings: function() {
      var arrOfLektionNumbers = []

      angular.forEach(this.getRaw(), function (val, key) {
        arrOfLektionNumbers.push(String(key))
      })

      return arrOfLektionNumbers
    }

  }
})

.factory('UserData', ['Questions', '$window', function(Questions, $window) {
  return {

    getSelection: function () {

      if ($window.localStorage.selection === undefined || $window.localStorage.selection === '') {
        return Questions.getAll()
      } else {
        var raw = $window.localStorage.selection
        var arr = raw.split('||')
        var result = []
        for (var i = arr.length - 1; i >= 0; i--) {
          result = result.concat(Questions.getLektion(parseInt(arr[i])))
        };
        return result
      }
    },

    addToSelection: function (list) {
      console.log("addToSelection is run"); 
      console.log($window.localStorage.selection)
      list = String(list)
      var arr = list.split(',')
      var selecCheck = window.localStorage.selection || ''
      selecCheck = selecCheck.split('||')
      console.log(selecCheck);
      for (var i = arr.length - 1; i >= 0; i--) {
        console.log(String(arr[i]));
        console.log(selecCheck.indexOf(String(arr[i])))
        if (selecCheck.indexOf(String(arr[i])) != -1) {continue}

        if ($window.localStorage.selection === '' || $window.localStorage.selection === undefined) {
          console.log("its '' or undefined");
          console.log(arr[i]);
          window.localStorage.selection = arr[i]
        } else {
          window.localStorage.selection += '||' + arr[i]
        }
      };
    },

    getSelectedLektions: function () {
      if ($window.localStorage.selection === '' || $window.localStorage.selection === undefined) {
        return Questions.getArrayOfLektionNumbersAsStrings()
      } else {
        return $window.localStorage.selection.split('||')
      }
    },

    getSelectedLektionsAsObj: function() {
      var result = {}
      var arrOfLektionNumbers = Questions.getArrayOfLektionNumbers()

      selected = this.getSelectedLektions()

      console.log(selected)

      for (var i = arrOfLektionNumbers.length - 1; i >= 0; i--) {
        if (selected.indexOf(String(arrOfLektionNumbers[i])) != -1) {
          result[arrOfLektionNumbers[i]] = true
        } else {
          result[arrOfLektionNumbers[i]] = false
        }
      };
      return result
    },

    setSelectionFromObj: function(obj) {

      $window.localStorage.selection = ""

      angular.forEach(obj, function (val, key) {

        if (val) {
          if ($window.localStorage.selection === "") {
            $window.localStorage.selection = key
          } else {
            $window.localStorage.selection += ('||' + key)
          }
        };

      })
    },

    getEmptyToDashSettings: function() {
      return ($window.localStorage.emptyToDashSettings === 'true') || false
    },

    setEmptyToDashSettings: function(newValue) {
      return $window.localStorage.emptyToDashSettings = newValue
    },

    getTranslationSettings: function() {
      return ($window.localStorage.translationSettings === 'true') || false
    },

    setTranslationSettings: function(newValue) {
      return $window.localStorage.translationSettings = newValue
    },

    //Stats

    getTotalTime: function() {
    	return parseInt($window.localStorage.totalTime || 0)
    },

    addToTotalTime: function(n) {
    	var old = parseInt($window.localStorage.totalTime || 0)
    	return $window.localStorage.totalTime = old + n
    },

    getTotalRights: function() {
    	console.log("totalRight is ", parseInt($window.localStorage.totalRights || 0));
    	return parseInt($window.localStorage.totalRights || 0)
    },

    addToTotalRights: function(n) {
    	console.log("adding ", n);
    	var old = parseInt($window.localStorage.totalRights || 0)
    	return $window.localStorage.totalRights = old + parseInt(n)
    }

  }
}])
.factory('Helpers', function(){
  return {
    random: function (from, to) {
      return Math.floor((Math.random() * to) + from);      
    },

    getTimeString: function(time) {
    	time = parseInt(time) / 1000

    	var seconds = time % 60
    	var minutes = (time - seconds) / 60

    	if (seconds < 10) {
    		seconds = '0' + String(seconds)
    	}

    	var str = String(minutes) + ':' + String(seconds)

    	return str
    }
  }
})