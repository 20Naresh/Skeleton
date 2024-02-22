const axios = require('axios');
const { expect, test } = require("@playwright/test");
const fs = require('fs');
const FormData = require('form-data');


test("File upload API test", async ({ page }) => {

    const filePath = '/home/naresh/Documents/Playwirght_Skeleton_Framework/Files/FCHEM_fchem-2022-1046930-tudplusc.xml'; 
    const fileData = fs.createReadStream(filePath);


    const formData = new FormData();



    formData.append('data', '{"customerId":"aip", "journalId":"APP", "articleId":"1029", "userRole":"ME"}');
    formData.append('tudxml', fileData);
    formData.append('changexml', fileData);

    try {
        const response = await axios.post('https://ecqa-api.editcentral.app/process/initiate', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('File uploaded successfully:', response.data);
      } catch (error) {
        console.error('Error uploading file:', error);
      }





})