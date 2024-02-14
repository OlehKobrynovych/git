// <a /> скачування при виконанні умови
if (location?.pathname?.length && location?.pathname === '/feed-fb.csv') {
    // const url = 'https://vyroby-exsel-file.s3.eu-central-1.amazonaws.com/feed.csv';
    // window.open(url, '_blank');

    const link = document.createElement('a');
    link.href = 'https://vyroby-exsel-file.s3.eu-central-1.amazonaws.com/feed.csv';
    link.download = 'feed.csv'; 
    link.click();

    navigate('/')
}