# Turkish Extension for [Flarum](http://flarum.org/)

Extension to localize the Flarum forum software and its official extensions into Turkish.

### Version

- 0.1.0-beta.2
- Released on September 16, 2015

### Compatibility

- [Flarum](https://github.com/flarum/core) (Core) 0.1.0-beta.2
	- [Likes](https://github.com/flarum/likes) 0.1.0-beta.2
	- [Lock](https://github.com/flarum/lock) 0.1.0-beta.2
	- [Mentions](https://github.com/flarum/mentions) 0.1.0-beta.2
	- [Pusher](https://github.com/flarum/pusher) 0.1.0-beta.2
	- [Reports](https://github.com/flarum/reports) 0.1.0-beta.2
	- [Sticky](https://github.com/flarum/sticky) 0.1.0-beta.2
	- [Subscriptions](https://github.com/flarum/subscriptions) 0.1.0-beta.2
	- [Tags](https://github.com/flarum/tags) 0.1.0-beta.2

### License

Released under the MIT License. Please see the [LICENSE](https://github.com/maelsoucaze/flarum/blob/master/LICENSE) file.

## Documentation

### How to install?

Once the compressed extension downloaded, extract the archive with a [file archiver](https://en.wikipedia.org/wiki/Comparison_of_file_archivers).

Using [FTP](http://en.wikipedia.org/wiki/File_Transfer_Protocol), browse into your Flarum root (which contains the *config.php* file). You will see an *extensions/* directory. Inside this directory, create a *turkish/* directory. Then, upload the content of the previous extracted archive inside the *turkish/* directory.

The extension is now uploaded to your server and your next step is to enable it. Log-in to your forum and click on your username located at the top right of the screen. You will see a pop-up. Click on the *Administration* link. Once in the administration page, click on *Extensions*. You will see a list of all your extensions. Note that the Turkish extension is the grey tinted one, with a white icon of the Earth and a blue background. Hover the extension and notice the dotted vertical menu. Click on that vertical menu and click on *Enable*.

Your extension is now enabled. Congratulations! You, and your users, can now select the language via a dropdown menu located in the header, at the right of the search box.

### How to update?

Like the installation process, download the updated compressed extension and extract the archive. Then, using [FTP](http://en.wikipedia.org/wiki/File_Transfer_Protocol), browse into the extension root at the *extensions/turkish/* directory. Inside this directory, delete all the current content and upload the new files from the previous extracted archive.

Your extension files are now updated, but you have to force the cache of your forum to refresh. To do that, using [FTP](http://en.wikipedia.org/wiki/File_Transfer_Protocol), locate the *assets/* directory. Inside the directory, delete the *forum-tr-XYZ.js* and *admin-tr-XYZ.js* files (*XYZ* are some random generated letters and numbers). You can now enjoy the latest improvements and fixes of the updated extension!
