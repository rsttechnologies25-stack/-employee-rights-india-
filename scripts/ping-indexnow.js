/**
 * IndexNow Batch Submission Script
 * Automatically notifies Microsoft Bing, Yandex, Seznam, and Naver of current sitemap URLs.
 * Protocol: https://www.indexnow.org/
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const HOST = 'employee-rights.rexonsofttech.in';
const KEY = 'e3d7a8c4f92b451086e5c70912bc8d31';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_PATH = path.resolve(__dirname, '../public/sitemap.xml');

function extractUrlsFromSitemap(xmlContent) {
    const urls = [];
    const regex = /<loc>(https:\/\/[^<]+)<\/loc>/g;
    let match;
    while ((match = regex.exec(xmlContent)) !== null) {
        urls.push(match[1]);
    }
    return urls;
}

async function pingIndexNow() {
    try {
        console.log(`[IndexNow] Reading sitemap from: ${SITEMAP_PATH}`);
        const sitemapXml = fs.readFileSync(SITEMAP_PATH, 'utf-8');
        const urlList = extractUrlsFromSitemap(sitemapXml);

        console.log(`[IndexNow] Extracted ${urlList.length} URLs for batch indexing submission.`);

        const payload = JSON.stringify({
            host: HOST,
            key: KEY,
            keyLocation: KEY_LOCATION,
            urlList: urlList
        });

        const options = {
            hostname: 'api.indexnow.org',
            port: 443,
            path: '/indexnow',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Content-Length': Buffer.byteLength(payload)
            }
        };

        console.log(`[IndexNow] Submitting payload to https://api.indexnow.org/indexnow ...`);

        const req = https.request(options, (res) => {
            console.log(`[IndexNow] HTTP Status Code: ${res.statusCode} ${res.statusMessage}`);
            let body = '';
            res.on('data', (chunk) => body += chunk);
            res.on('end', () => {
                if (res.statusCode === 200 || res.statusCode === 202) {
                    console.log(`[IndexNow] ✅ Success! Search engines notified successfully.`);
                } else {
                    console.log(`[IndexNow] Response: ${body || '(empty body)'}`);
                }
            });
        });

        req.on('error', (err) => {
            console.warn(`[IndexNow] Network notice: ${err.message}`);
        });

        req.write(payload);
        req.end();

    } catch (err) {
        console.error(`[IndexNow] Error:`, err);
    }
}

pingIndexNow();
