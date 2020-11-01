# DT173G - Projekt

## Webbplats

Detta är en webbplats som konsumerar en webbtjänst för att hämta data från en databas, och visas för besökare på webbplatsen.

Tanken är att detta ska vara ett porfolio där folk kan läsa om mig som webbutvecklare, och att webbplatsen ska utnyttja en webbtjänst för att hämta informationen som presenteras.

Webbplatsen har skapats genom att jag har använt mig utav gulp, nodejs och SASS. 

Nodejs är det som används i grunden för att denna utvecklingsmiljö ska fungera. Jag använder mig utav ett flertal paket som underlättar vid utvecklingen och är installerade via Node Packet Manager.

Paket som används:
* Gulp - Paket för att använda Gulp, vilket är systemet som används för automatisering
* Gulp-concat - paket som tillåter en att slå samman flera filer till en enda fil.
* Gulp-terser - paket som minifierar JavaScript-filer, och därmed minskar filstorleken, och gör det mindre läsbart.
* Gulp-clean-css - paket som minifierar CSS-filer, och därmed minskar filstorleken.
* Browser-Sync - paket som gör det möjligt att starta en server och som känner av när kod ändras, och kan utifrån det uppdatera webbläsaren, så dina kodförändringar visas i realtid.
* Gulp-sass - paket för stöd av sass i Gulp
* Node-sass - paket som hjälper vid kompilering av SASS-kod till vanlig CSS-kod

Gulp har använts för automatisering av övergång från arbetsfiler till filer som är redo att publiceras. I gulfile.js som används slås de filer som används i arbetskatalogen tillsammans. Används ett flertal JavaScriptfiler slås de samman och minifieras till en enda fil. SASS-filer konverteras till vanlig CSS-kod och minifieras därefter.

SASS har använts för styling av webbplatsen, och är en preprocessor som tillåter ett annat syntax än vanlig CSS. Det tillåter bland annat variabler och nya funktioner, som sedan blir vanlig CSS-kod när det kompileras, med hjälp utav verktyg.