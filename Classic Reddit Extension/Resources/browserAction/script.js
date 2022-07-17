const setupPage = async () => {
    document.getElementById('domain').value = await getSetting('domain', 'old.reddit.com')
}

const updateSettings = async ({ currentTarget: { id, value } }) => {
    if (id === 'domain') {
        await setSetting('domain', value);
    }
}

document.querySelectorAll('input').forEach(el => el.addEventListener('change', updateSettings));

setupPage();
