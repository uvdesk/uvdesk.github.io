# Project Title

The purpose of this project is to deliver a *refined* customer
service experience. This project comes with PHP-based packages in order to develop and or build modules to create custom helpdesk solutions for your organization. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

#### Hardware Requirements

1. Processdor: 1.60GHz or Higher
2. RAM: 3GB or higher

#### Software Requirements

1. Server: Apache
2. Database: MySQL
3. For Ubuntu

	- **[Install Composer](https://getcomposer.org/download/)**
	- **PHP Installation (run the commands to install)**
		- **For PHP 7.0**
			- apt-get -y install php7.0 php7.0-curl php7.0-intl php7.0-gd php7.0-dom php7.0-mcrypt php7.0-iconv php7.0-xsl php7.0-mbstring php7.0-ctype php7.0-zip php7.0-pdo php7.0-xml php7.0-bz2 php7.0-calendar php7.0-exif php7.0-fileinfo php7.0-json php7.0-mysqli php7.0-mysql php7.0-posix php7.0-tokenizer php7.0-xmlwriter php7.0-xmlreader php7.0-phar php7.0-soap php7.0-mysql php7.0-fpm libapache2-mod-php7.0 php7.0-gmp php7.0-bcmath php7.0-apcu php7.0-redis php7.0-imagick php7.0-imap php7.0-xdebug

		- **For PHP 7.1**
			- apt-get -y install php7.1 php7.1-curl php7.1-intl php7.1-gd php7.1-dom php7.1-mcrypt php7.1-iconv php7.1-xsl php7.1-mbstring php7.1-ctype php7.1-zip php7.1-pdo php7.1-xml php7.1-bz2 php7.1-calendar php7.1-exif php7.1-fileinfo php7.1-json php7.1-mysqli php7.1-mysql php7.1-posix php7.1-tokenizer php7.1-xmlwriter php7.1-xmlreader php7.1-phar php7.1-soap php7.1-mysql php7.1-fpm libapache2-mod-php7.1 php7.1-gmp php7.1-bcmath php7.1-apcu php7.1-redis php7.1-imagick php7.1-imap php7.1-xdebug
			
		- **For PHP 7.2**
			- apt-get -y install php7.2 php7.2-curl php7.2-intl php7.2-gd php7.2-dom php7.2-iconv php7.2-xsl php7.2-mbstring php7.2-ctype php7.2-zip php7.2-pdo php7.2-xml php7.2-bz2 php7.2-calendar php7.2-exif php7.2-fileinfo php7.2-json php7.2-mysqli php7.2-mysql php7.2-posix php7.2-tokenizer php7.2-xmlwriter php7.2-xmlreader php7.2-phar php7.2-soap php7.2-mysql php7.2-fpm libapache2-mod-php7.2 php7.2-gmp php7.2-bcmath php7.2-apcu php7.2-redis php7.2-imagick php7.2-imap php7.2-xdebug


		- **For PHP 7.3**
			- apt-get -y install php7.3 php7.3-curl php7.3-intl php7.3-gd php7.3-dom php7.3-iconv php7.3-xsl php7.3-mbstring php7.3-ctype php7.3-zip php7.3-pdo php7.3-xml php7.3-bz2 php7.3-calendar php7.3-exif php7.3-fileinfo php7.3-json php7.3-mysqli php7.3-mysql php7.3-posix php7.3-tokenizer php7.3-xmlwriter php7.3-xmlreader php7.3-phar php7.3-soap php7.3-mysql php7.3-fpm libapache2-mod-php7.3 php7.3-gmp php7.3-bcmath php7.3-apcu php7.3-redis php7.3-imagick php7.3-imap php7.3-xdebug

	- **Mailparse Installation (run the commands to install)**
		- First Option: apt-get install php < version > -mailparse 

		- Second Option: pecl install mailparse 
			- Add "extension=mailparse.so" in php.ini file of the corresponding php 		version.
	- IMAP Installation (run the commands to install)
		- apt-get install php < version > -imap

		
4. For Windows

	- **[Install Composer](https:getcomposer.org/download/)**
		- Give **composer.exe** the path of **php.exe**, which you can find in your WAMP directory.

	- **PHP Installation**
		- PHP comes automatically installed with WAMP.

	- **Mailparse Installation** 
		- [Download Bitmani Wamp](https://bitmani.com/stack/wamp)
		- Uncomment Mailparse Extension from **php.ini** file of the specific version you have enabled, then restart Apache Server.
	
	- **IMAP Installation**
		- [Bitmani WAMP](https://bitmani.com/stack/wamp) already comes with IMAP Extension
			- Uncomment the IMAP Extension in the **php.ini** file of the specific version, then restart Apache server.



5. For Mac

	- **[Install Composer](https://getcomposer.org/download/)**
		- Run the commands from the link to download Composer

	- **PHP Installation**
		- PHP comes automatically installed with MAMP, you can download a specific PHP version according to your requirements. 

	- **Mailparse Installation**
		- Run command: "pecl install mailparse"
			- [Install pecl on MAC if not already installed](https://www.lullabot.com/articles/installing-php-pear-and-pecl-extensions-on-mamp-for-mac-os-x-107-lion)
		- Add "extension=mailparse.so" in **php.ini**  of your respective PHP version.
	- **IMAP Installation**
		- MAMP comes preinstalled with IMAP Extension, uncomment the IMAP Extension from **php.ini** file of your respective PHP version, then restart Apache services.



### Installing


1. Installation on Ubuntu

	- **Step 1**
		- Install the community-skeleton project via composer using the commands below:
			- composer clear-cache
			- composer create-project uvdesk/community-skeleton helpdesk-project --stability dev
		- OR
			- Download ZIP as per your System's PHP version.

	- **Step 2**
		- Browse your installed helpdesk project.
			- ex: https://domain/installed_folder/public/

	- **Step 3**
		- Set up Helpdesk with the **installation wizard**.

	- **Step 4**
		- The wizard will check whether your system meets minimum requirements to run the application.

	- **Step 5**
		- The wizard will check your MySQL database connection and configure it with your application.

	- **Step 6**
		- Create a Super Admin Account through the wizard.

	- **Step 7**
		- Configure the website through the wizard.

	- **Step 8**
		- Finish installing the application through the wizard.

	- **Step 9**
		- The wizard will migrate database to the latest schema version.

	- **Step 10**
		- The wizard will indicate success message on finished installation. 


2. Installation on Windows

	- **Step 1**
		- Install the community-skeleton project via composer using the commands below:
			- composer clear-cache
			- composer create-project uvdesk/community-skeleton helpdesk-project --stability dev
		- OR
			- Download ZIP as per your System's PHP version.

	- **Step 2**
		- Browse your installed helpdesk project.
			- ex: https://domain/installed_folder/public/

	- **Step 3**
		- Set up Helpdesk with the **installation wizard**.

	- **Step 4**
		- The wizard will check whether your system meets minimum requirements to run the application.

	- **Step 5**
		- The wizard will check your MySQL database connection and configure it with your application.

	- **Step 6**
		- Create a Super Admin Account through the wizard.

	- **Step 7**
		- Configure the website through the wizard.

	- **Step 8**
		- Finish installing the application through the wizard.

	- **Step 9**
		- The wizard will migrate database to the latest schema version.

	- **Step 10**
		- The wizard will indicate success message on finished installation.


3. Installation on Mac


## Running the tests



### Break down into end to end tests



### And coding style tests



## Deployment



## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments


