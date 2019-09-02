# idetailaid-viewer-mock-api
A mock API to allow development of HTML content outside of the iDetailAid platform.

Simply include this JS file into your HTML5 package.

````
<script src='./idetailaid_viewer_mock_api.js'></script>
````

To build a viewer specific version of the API follow these steps:
  * Login to iDetailAid
  * Preview a slide
  * Open the console
  * Run the following command:
````
Viewer.api.buildMockAPI()
````

 This wills save a JS file that mocks the API for that version of the Viewer.
 
 
 The mock API file does not need to be removed from the package once uploaded into iDetailAid; the actual API will take precedence over the mock API.
 
