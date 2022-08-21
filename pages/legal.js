import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full max-w-2xl mx-auto px-8">
        <h1 className="text-5xl font-bold tracking-tight mt-auto mb-12 max-w-4xl sm:text-6xl md:text-7xl lg:text-8xl">
          Rechtliches
        </h1>
        <article className="prose dark:prose-dark">
          <p>
            Vielen Dank, dass Sie unsere Produkte und Dienste („Dienste“) nutzen. Die Dienste werden Ihnen von
            AGENTUR DIENER OG („Diener“), Waaggasse 4/8, 1040 Wien, Österreich, zur Verfügung gestellt.
            Durch die Verwendung unserer Dienste stimmen Sie diesen Nutzungsbedingungen zu. Bitte lesen Sie diese
            sorgfältig durch.
          </p>
          <section className="mt-8">
            <h2 id="nutzung">Nutzung unserer Dienste</h2>
            <small>Zuletzt geändert am: 22. August 2017</small>
            <p>
              Sie sind zur Einhaltung der Richtlinien verpflichtet,
              die für unsere Dienste gelten.
            </p>
            <p>
              Diener stellt analoges und digitales Bildmaterial für redaktionelle
              Nutzung für alle Print- und digitalen Medien sowie für Film- und
              Fernsehmedien zur Verfügung. Jede nichtredaktionelle oder werbliche
              Nutzung des Bildmaterials bedarf der ausdrücklichen vorherigen
              schriftlichen Genehmigung durch Diener.
              Alle Lieferungen, Übertragungen und Angebote von analogen und
              digitalen Bildern sowie Downloads und die Vergabe von Nutzungsrechten
              erfolgen lediglich freibleibend und nicht exklusiv zu den nachstehenden
              Geschäftsbedingungen. Anderweitige Nutzungsrechtsvereinbarungen
              müssen gesondert individuell vereinbart werden.
            </p>
          </section>
          <section className="mt-8">
            <h2 id="honorare">Honorare</h2>
            <p>
              Jede Nutzung von Diener-Bildmaterial ist honorarpflichtig. Dies gilt
              auch bei Verwendung für Layoutzwecke und Kundenpräsentationen sowie
              bei Verwendung von Bilddetails.
              Honorare sind vor Verwendung zu vereinbaren. Sie richten sich nach
              Medium, Art und Umfang der Nutzung, die Diener anzugeben sind.
              Erfolgt keine Honoraranfrage durch den Vertragspartner oder keine
              sonstige Honorarvereinbarung, wird automatisch nach den jeweils
              geltenden Honorarsätzen der Innung der Berufsfotografen
              (<a href="https://www.wko.at/branchen/gewerbe-handwerk/berufsfotografen/start.html"
                target="_blank" rel="noreferrer">https://www.wko.at/branchen/gewerbe-handwerk/berufsfotografen/start.html</a>
              ) in der jeweils gültigen Fassung für die zugrunde
              liegende Nutzung berechnet.
            </p>
          </section>
          <section className="mt-8">
            <h2 id="haftung">Haftungsausschluss</h2>
            <p>
              Im Hinblick auf die technischen Eigenschaften des Internet
              kann keine Gewähr für die Authentizität, Richtigkeit und Vollständigkeit
              der im Internet zur Verfügung gestellten Informationen übernommen werden.
              Es wird auch keine Gewähr für die Verfügbarkeit oder den Betrieb der
              gegenständlichen Homepage und ihrer Inhalte übernommen.
              Jede Haftung für unmittelbare, mittelbare oder sonstige Schäden,
              unabhängig von deren Ursachen, die aus der Benutzung oder
              Nichtverfügbarkeit der Daten und Informationen dieser Homepage erwachsen,
              wird, soweit rechtlich zulässig, ausgeschlossen.
              Der Inhalt dieser Homepage ist urheberrechtlich geschützt.
              Die Informationen sind nur für die persönliche Verwendung bestimmt.
              Jede weitergehende Nutzung insbesondere die Speicherung in Datenbanken,
              Vervielfältigung und jede Form von gewerblicher Nutzung sowie die
              Weitergabe an Dritte - auch in Teilen oder in überarbeiteter Form -
              ohne Zustimmung der jeweiligen Organisation ist untersagt.
              Hyperlinks auf diener.at sind willkommen.
              Jede Einbindung einzelner Seiten unseres Angebotes in fremde
              Frames ist zu unterlassen.
            </p>
            <p>
              Soweit im Content personenbezogene Bezeichnungen nur in männlicher
              Form angeführt sind, beziehen sie sich auf Frauen und Männer
              in gleicher Weise.
            </p>
          </section>
          <section className="mt-8">
            <h2 id="datenschutz">Erklärung zur Informationspflicht</h2>
            <p>
              Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen.
              Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen
              Bestimmungen (DSGVO, TKG 2003). In diesen Datenschutzinformationen informieren wir
              Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.
            </p>
            <h3>Kontakt mit uns</h3>
            <p>
              Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen,
              werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen
              sechs Monate bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </section>
          <section className="mt-8">
            <h2 id="cookies">Zur Verwendung von Cookies</h2>
            <p>
              Unsere Website verwendet so genannte Cookies. Dabei handelt es sich um kleine Textdateien,
              die mit Hilfe des Browsers auf Ihrem Endgerät abgelegt werden. Sie richten keinen Schaden an.
              Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu gestalten.
              Einige Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen.
              Sie ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
              Wenn Sie dies nicht wünschen, so können Sie Ihren Browser so einrichten, dass er Sie über
              das Setzen von Cookies informiert und Sie dies nur im Einzelfall erlauben.
              Bei der Deaktivierung von Cookies kann die Funktionalität unserer Website eingeschränkt sein.
            </p>
            <p>
              Cookies sind Textdateien, die auf dem Computer des Besuchers einer Webseite
              gespeichert werden können, sofern die Browsereinstellungen des Besuchers
              dies zulassen. In diesen Textdateien können Informationen geschrieben werden,
              die zu einem späteren Zeitpunkt wieder ausgelesen werden können.
              Ein Cookie ist an eine bestimmte Domain gebunden und enthält Informationen,
              die später, nur von dieser Domain aus, wieder ausgelesen werden können.
              Werden solche Cookies von jener Domain geschrieben unter der die Website
              ausgeliefert wird, spricht man von First-Party-Cookies.
              Werden Cookies von einer anderen Domain als jener, unter der die Website
              ausgeliefert wird, geschrieben, spricht man von Third-Party-Cookies.
              Diese Third-Parties, oder Drittparteien, erhalten die Möglichkeit zum
              Schreiben von Cookies durch den Umstand, dass die aufgerufene Website Funktionalität,
              die unter der Dritt-Domain betrieben wird, einbettet.
              Alle gängigen Browser ermöglichen die Steuerung des Setzens von Cookies sowie deren
              Speicherdauer. Dadurch kann das Setzen von Cookies auf Ihrem Gerät generell
              unterbunden und die Speicherdauer der Cookies verkürzt werden.
              Genauere Informationen hierzu finden Sie im Hilfemenü Ihres Browsers oder
              z.B. unter der URL <a href="http://www.aboutcookies.org"
                target="_blank" rel="noreferrer">http://www.aboutcookies.org</a>.
              Bereits gesetzte Cookies können Sie entweder direkt durch manuelle Löschung
              im entsprechenden Ordner auf Ihrer Festplatte oder durch Löschung über die
              entsprechende Funktion Ihres Browsers entfernt werden.
              Im Datenschutz unterscheidet man Cookies, die Ihre Zustimmung erfordern,
              bevor diese auf Ihrem Endgerät gespeichert werden dürfen und Cookies,
              die ohne Ihre Zustimmung gespeichert werden dürfen, weil deren alleinige
              Zweck „die Durchführung der Übertragung einer Nachricht über ein
              elektronisches Kommunikationsnetz ist” oder, „wenn dies unbedingt
              erforderlich ist, damit der Anbieter eines Dienstes der
              Informationsgesellschaft, der vom Teilnehmer oder Nutzer ausdrücklich
              gewünscht wurde, diesen Dienst zur Verfügung stellen kann”.
            </p>
            <p>
              Wir setzen außerdem Software zur Analyse der Benutzung unserer Websites ein.
              Hierdurch kann die Nutzung der Webseite ausgewertet und es können wertvolle
              Erkenntnisse über die Bedürfnisse der Nutzer gewonnen werden.
              Diese Erkenntnisse tragen dazu bei, die Qualität des Angebotes
              der AGENTUR DIENER OG für ihre Nutzer noch weiter zu verbessern.
              In diesem Zusammenhang kommen insbesondere Cookies zum Einsatz.
              Sie ermöglichen die Wiedererkennung eines Nutzers bei einem erneuten
              Besuch der Website. Dies ermöglicht der AGENTUR DIENER OG,
              die oben beschriebene Auswertung der Nutzung durchzuführen.
              Mit der Nutzung der Website der AGENTUR DIENER OG wird der oben
              beschriebenen Vorgangsweise zur Analyse der Benutzung dieser Websites
              zugestimmt.
            </p>
          </section>
          <section className="mt-8">
            <h2 id="google">Web-Analyse</h2>
            <p>
              Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. („Google“).
              Google Analytics verwendet sog. „Cookies“, Textdateien, die auf Ihrem Computer gespeichert
              werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch das
              Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen
              Server von Google in den USA übertragen und dort gespeichert. Im Falle der Aktivierung der
              IP-Anonymisierung auf dieser Website, wird Ihre IP-Adresse von Google jedoch innerhalb von
              Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den
              Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an
              einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser
              Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports
              über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung
              verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics
              von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.
              Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern;
              wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser
              Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch das Cookie
              erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die
              Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden
              Link (<a href="http://tools.google.com/dlpage/gaoptout?hl=de" rel="noreferrer" target="_blank">http://tools.google.com/dlpage/gaoptout?hl=de</a>)
              verfügbare Browser-Plugin herunterladen und installieren.
            </p>
            <p>
              Sie können die Erfassung durch Google Analytics verhindern, indem Sie auf folgenden Link
              klicken. Es wird ein Opt-Out-Cookie gesetzt, das die zukünftige Erfassung Ihrer
              Daten beim Besuch dieser Website verhindert: <a href="javascript:gaOptout()">Google Analytics deaktivieren</a>
            </p>
            <p>
              Nähere Informationen zu Nutzungsbedingungen und Datenschutz finden Sie unter <a href="http://www.google.com/analytics/terms/de.html" target="_blank" rel="noreferrer">
              http://www.google.com/analytics/terms/de.html</a> bzw. unter <a href="https://www.google.de/intl/de/policies/" target="_blank" rel="noreferrer">
              https://www.google.de/intl/de/policies/</a>.
              Wir weisen Sie darauf hin, dass auf dieser Website Google Analytics um den Code „anonymizeIp“
              erweitert wurde, um eine anonymisierte Erfassung von IP-Adressen (sog. IP-Masking) zu gewährleisten.
            </p>
            <p>
              Die Datenverarbeitung erfolgt auf Basis der gesetzlichen Bestimmungen des § 96 Abs 3 TKG
              sowie des Art 6 Abs 1 lit a (Einwilligung) und/oder f (berechtigtes Interesse) der DSGVO.
              Unser Anliegen im Sinne der DSGVO (berechtigtes Interesse) ist die Verbesserung unseres
              Angebotes und unseres Webauftritts. Da uns die Privatsphäre unserer Nutzer wichtig ist,
              werden die Nutzerdaten pseudonymisiert.
              Die Nutzerdaten werden für die Dauer von 6 Monaten aufbewahrt.
            </p>
          </section>
          <section className="mt-8">
            <h2 id="rechte">Ihre Rechte</h2>
            <p>
              Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung,
              Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu.
              Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht
              verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise
              verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren.
              In Österreich ist dies die Datenschutzbehörde.
            </p>
          </section>
        </article>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();

  return { props: { globalData } };
}
