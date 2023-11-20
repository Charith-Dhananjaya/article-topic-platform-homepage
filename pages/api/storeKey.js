const handler = async(req, res) => {

    const method = 'POST';
    const {storeId, searchKey, count} = req.body;
    const url = `https://te75qed7e7.execute-api.eu-north-1.amazonaws.com/top/storesearchkey`;
    const options = {
        method: method,
        body: JSON.stringify({
            storeId: storeId,
            searchKey: searchKey,
            count: count
          }),
    }
    // Set up CORS headers with options
    try{
            const response = await fetch(url,options);
            const finalData = await response.json();
            return res.status(200).json(finalData);
          } catch (error) {
             console.error(error)
             return res.status(error.status || 500).end(error.message);
        }
}
  
export default handler;