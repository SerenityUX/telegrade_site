import TikAPI from 'tikapi';
import * as fs from "fs/promises"

export async function scrapeAccount(handle) {
    fs
    headers = {
        'X-API-KEY': 'CB1D352F-23E7-4D64-97AC-FB5AEF4839FD',
        'Content-Type': 'application/json'
    }
    body = {
        username: "minimaru.store"
    }
    fetch('https://sandbox.tikapi.io', { headers, body })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
    })
    const api = TikAPI('DemoAPIKeyTokenSeHYGXDfd4SFD320Sc39Asd0Sc39Asd4s');
    api.set({
      $sandbox: true
    });
}