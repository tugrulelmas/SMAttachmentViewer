# SMAttachmentViewer
it is a google chrome extension to view images attached on HP Service Manager version 9.41.0020 without downloading them.

## HP Service Manager
Images as an attachment on Servive Manager cannot be shown without downloading them and this leads to loss of time and requires users to perform extra action such as downloading new files, finding and then deleting the files already downloaded. In case of 10 attachments, the user may forget the last displayed image among the downloaded images and therefore users have to spend time to find relevant image and display other images again and again.

## Installation
- Simply download or clone this code.
- Change `matches` url in [manifest.json](manifest.json) with your SM url.
- Open (chrome://extensions) or select the menu `Window > Extensions`.
- Enable the developer mode at top right.
- Click `Load unpacked extension...` and select the source code folder.

## Usage
Shows the image requires to be downloaded in a popup window, if the mouse hovers over the attachment's link. When the mouse leaves the boundaries of the image, the popup image of the attachment file disappears.

## Deploying
* Run `npm-install`
* Run `gulp`
* Zip files under the `dist` folder.
* Go to https://chrome.google.com/webstore/developer/dashboard.
* Login with your credentials. 
* Update the Zip file.
* Publish the app.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
