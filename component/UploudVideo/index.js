https://blog.logrocket.com/multipart-uploads-s3-node-js-react/

if (test1) {
    data.video = await handleUpload(exerciseObj.newVideo);
}




const handleUpload = async (file) => {
    if (file) {
      console.log('file', file);
      const chunkSize = 1024 * 1024 * 5; // 3MB (size of the fragment)
      const uploader = new Uploader({
        chunkSize: file.size <= chunkSize ? file.size : chunkSize,
        threadsQuantity: 5,
        file: file,
        fileName: file.name,
      });
  
      return new Promise((resolve, reject) => {
        uploader.onProgress((progress) => {
          console.log('progress', progress);
        });
  
        uploader.onError((error) => {
          console.error('Error:', error);
          reject(error);
        });
  
        uploader.onComplete((result) => {
          console.log('Completed!', result);
          if (result?.success && result?.data) {
            resolve(result.data);
          } else {
            resolve('');
          }
        });
  
        uploader.start();
      });
    } else {
      console.error('No file selected');
      return Promise.reject('No file selected');
    }
};