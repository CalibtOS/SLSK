import fs from "fs";
import path from "path";
import https from "https";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "stitch_deck_images");

const slides = [
  { file: "01_title.png", url: "https://lh3.googleusercontent.com/aida/ADBb0ugBGMX1CtXSa2Ixzn5zSxujD6iyNXqrCww75E9wD-Uxnit98mSNaMwFVs-vtXl9cwVJHEJr66KJB9YdPgHKmIQkreDlDvM4-a04yxCD4RV2pmNLZLxvgKKkWDHTE1V6Kb8XerG9_wyinvGMgxG0Jefjhc8oAfkKQi96G-fEVkKh-y54llyHFKCeMGZJg2-r7feEySHCFaPe9pgVed5r4yAbVXWknxFa3IOQflsuBdm1--d0MssAasZRBVA" },
  { file: "02_market.png", url: "https://lh3.googleusercontent.com/aida/ADBb0ugWi0EoO1BWgk0pK_nmfXF0Mh31b9-jEUwebU1Y8TTeY8RJQKaEjuHtKxqdwehVEih2aEdlihForuU0xYHn2TlXpky1RSQFS-5Iz2z2Jg35JUmeRL9QQH8SAlcdLo-07E90fENJBoskcwFKH5MCaUqqOThJA7DfAS-FW4mwpQGSuvcSe4AidXa0SXcq6591bUvMo9e1BnWiCSdDEb74QGlIJPVTyGFPSV-oc2Fu2wDLcw45fdpVBkwLZBY" },
  { file: "03_odoo.png", url: "https://lh3.googleusercontent.com/aida/ADBb0uhHlaIio9nGI55LQ2FfLOQWRafiEr4z4tO04UN-qejIakj4xRAjLb2VH8t_ZCJt8XjdJx1siOTRH0HG3HT2m0S1ljJ2RqVcIAjWpT_TkRSYAONOWJWY_d7kWypkmqDiXuUaUahfu1S3g_teKXx9tAtOlrzj7AdQ9PEUwas-awyX1yq--IdgCiO5YZJB7JOS0NkmxDae3LaGxltvSadq2HPuQGlm3E3pWvrVnV_TlE3owU0cLDJq2LLibA" },
  { file: "04_bottlenecks.png", url: "https://lh3.googleusercontent.com/aida/ADBb0ujpzK-m9RRexkzFg0KGkugRzYF-dQzjobzePbak9VZrdHavxPDBM4hV_pKl6QpgurkQDe4h1HRmP14Tj02Ai2Fd-u3NTwmevPabSkyrEVrSqvRrJfHPTQMKhHXncHiAduHOTifkg9Qa3bGzHf92fEUL_d_znjGCQHKCGbPK91BMzdKWLnW5TVITEaEzmYyWxpeoUXqLspY4REQ9OVkCGdNB_QMUz3eDAcb0izZZMvB5WSvfyAVo3dYRTg" },
  { file: "05_future.png", url: "https://lh3.googleusercontent.com/aida/ADBb0ugVNLOJKjULeaR0hXY8v3sRMjU2a46Qf22pOM7KqU2LAdonegJAhdOiFiSZ77dScwqGLUwn1POB5tl2hVeZvecKaDtveAsZRScDPxpas9Hib0jWIi5pGemNaxsFmMb4bY-zT9JpQM37qE60ymsnIucQ27DpGXtabhaTvqmZE4t7f__4iZ1lHrkOq8cPnxXus4JQLTl9M52WTPoG6F8keVgfc0ZHXYVX4YCcoPosgaIvnxhJrlEWMZ8Weic" },
  { file: "06_roi.png", url: "https://lh3.googleusercontent.com/aida/ADBb0ugvUznozOmozcEcw6MGlYOBCCxCkebVk0W281E6zqbnPnip3QB9LdXwy1trUoDkA9ydW6J0pWwN7RglHGqqovmDULpW4eXPzJXLG1Yqzc2RjYpIQmH3s4B2UWJ236J2X7epERmTjYR6cVbGB_irdG-WwtGDk-CUDSql4w-Uq6guamlcD2QO9HpLxOkp0U8c9VZC5lhKSDAOKnwVRywTjCHzf4z--a0troUzNx-cptmPvK-_3cqLigft2N0" },
  { file: "07_roadmap.png", url: "https://lh3.googleusercontent.com/aida/ADBb0ujg0vhLF1XqikoAF9GyDneaffmrGiPa-adC9tjHgziXmqZSpMwSECgDwRXb8bM1vGt7G8wEo4tavzjqOBS64obJ0Y56VzpMA16KhhJTps_D8AZLoSDM6ZM91GB4x6CS21ZhuG7oy6S8CDVY1sAsidwSDgNSw3bRxnXaNKdyoLx1kMAobw-oylQ_Xph_vWfJrTux3EPh4nK7rELis13NmOXiFayglAJpSXsZNFGT9ycOOW-pktUc_ol5Egw" },
  { file: "08_next_steps.png", url: "https://lh3.googleusercontent.com/aida/ADBb0uhT8TUzYY6qAvmfWj7vZQYuvd024bG0KpU8ZBZLjGusgw8J4lnavBoBPU7RS0LXfGmQ-hacyczctGuB9hysomX84veD208tIwhP9E1vuTbIg1bN84d-uO5fD4r-SUAuStRFk2KiAozPWR9b3YOG3Y75KTU90stySDsa9trc7D_z6i8J6vFo_H_RXKzhb8frr-i6qssWDt5OyTa3cb3itwCSh9VHiSmsNwWO5GZXCABGfRUuGHKMlS8E-T0" },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          file.close();
          fs.unlink(dest, () => {});
          return download(res.headers.location, dest).then(resolve).catch(reject);
        }
        if (res.statusCode !== 200) {
          file.close();
          fs.unlink(dest, () => {});
          return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        }
        res.pipe(file);
        file.on("finish", () => file.close(resolve));
      })
      .on("error", (err) => {
        file.close();
        fs.unlink(dest, () => {});
        reject(err);
      });
  });
}

fs.mkdirSync(outDir, { recursive: true });
for (const s of slides) {
  const dest = path.join(outDir, s.file);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
    console.log("skip", s.file);
    continue;
  }
  console.log("fetch", s.file);
  await download(s.url, dest);
}
console.log("done");
