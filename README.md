# uvdesk

A fully-functional UVDesk Community Edition project skeleton packaged along with the bare essential utilities that you can use to develop your own custom helpdesk solutions.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

#### Hardware Requirements

1. Processor: 1.60GHz or higher
2. RAM: 3GB or higher

#### Software Requirements

1. [PHP]
2. [Composer](https://getcomposer.org/)
3. [PHP IMAP](https://php.net/manual/en/book.imap.php)
4. [PHP Mailparse](https://php.net/manual/en/book.mailparse.php)
2. Server: Apache
3. Database: MySQL

What things you need to install the software and how to install them


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


