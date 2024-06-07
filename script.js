document.getElementById('uploadButton').addEventListener('click', async () => {
    const status = document.getElementById('status');
    status.textContent = 'Uploading to IPFS...';

    try {
        // Initialize IPFS
        const ipfs = await Ipfs.create();
        
        // Data to upload
        const data = 'bitcoin';
        
        // Add data to IPFS
        const result = await ipfs.add(data);

        // Pin the data (assuming IPFS node supports pinning, like infura)
        await ipfs.pin.add(result.cid);
        
        status.textContent = `Data pinned successfully! CID: ${result.cid}`;
    } catch (error) {
        status.textContent = `Error: ${error.message}`;
    }
});
