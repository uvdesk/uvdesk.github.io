# Introduction

UVdesk Community skeleton is a fully-functional support ticket system built on the top of the Symfony PHP framework, supporting organizations to provide better customer support.
It comes with all the essential features like Email Piping, Knowledgebase support, automated-workflow, multiple-group-team-agent-customer creation, prepared responses, saved replies and many more.
Features and functionality of community skeleton helpdesk enable the user to use or build custom helpdesk solution to make it for their purpose.

# Documentation

UVdesk Documentation [https://uvdesk.github.io/](https://uvdesk.github.io/)

# Prerequisites

## Hardware Requirements
1. Processor: 1.60GHz or higher
2. RAM: 3GB or higher

## Software Requirements
1. PHP 7.0 and higher
2. [Composer](https://getcomposer.org/)
3. [PHP IMAP](https://php.net/manual/en/book.imap.php)
4. [PHP Mailparse](https://php.net/manual/en/book.mailparse.php)
2. Server: Apache
3. Database: MySQL

# Installation & Configuration

## 1. Obtain the package
    
### a. via ZIP:

1. Download the [zip file](https://www.uvdesk.com/en/opensource/) for your prefered PHP version and extract it.

### b. via Composer:
    
1. clear cache:
    ```
    $ composer clear-cache
    ```

2. Create project: 
   ```
   $ composer create-project uvdesk/community-skeleton helpdesk-project --stability dev
   ```

## 2. Browse your installed uvdesk project:
For example – ht&#8203;tp://domain/installed_folder/public/

## 3. Install the uvdesk project:
A web installer will appear. Follow the following steps to install and configure the uvdesk:


- <h4 style="padding-left:10px">Step 1 - Evaluating System requirements:</h4>
    <p style="padding-left:15px">Make sure all your system requirements are met and click on the <code>Proceed</code> button.</p>  

- <h4 style="padding-left:10px">Step 2 - Database Configuration:</h4>
    <p style="padding-left:15px">Fill in the required database configuration fields and click on the <code>Proceed</code> button.</p>

- <h4 style="padding-left:10px">Step 3 - Create Super Admin Account:</h4>
    <p style="padding-left:15px">Fill in the required super admin credentials and click on the <code>Proceed</code> button.</p>

- <h4 style="padding-left:10px">Step 4 - Website Configuration:</h4>
    <p style="padding-left:15px">Provide prefixes for Member and Customer panel and click on the <code>Proceed</code> button.</p>

- <h4 style="padding-left:10px">Step 5 - Finish the Installation:</h4>
    <p style="padding-left:15px">Click on the <code>Install now</code> button to finish the installation. The uvdesk will be successfully installed on your system.</p>


# About Us
The development of the UVDesk Community Edition is supported by [Webkul][webkul], led by the [UVDesk Team](https://www.uvdesk.com/en/team/).

Visit our official [website][webkul] to learn more about the UVDesk Helpdesk System.


# License
All libraries and bundles included in the UVDesk Community Edition are released under the MIT or BSD license.

[webkul]: https://webkul.com/