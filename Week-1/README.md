
# When a user enters an URL in the browser, how does the browser fetch the desired result ?

A web browser is a software application that is used to access and display web pages on the internet. The main functionality of a browser is to send requests to web servers for resources such as HTML, CSS, and JavaScript files, and then display those resources to the user through the browser's user interface.

Web browsers are composed of several components that work together to provide a seamless browsing experience for the user. These include:

#### User Interface

The browser's window, address bar, buttons, and menus that allow the user to interact with the browser and navigate the web.


#### Rendering Engine

Responsible for interpreting and displaying web pages according to web standards (HTML, CSS, JavaScript) using the Document Object Model (DOM) and the CSS Object Model (CSSOM)

#### JavaScript Engine

Responsible for executing JavaScript code on the web page and providing dynamic and interactive functionality.

#### Networking

Handles the communication between the browser and web servers, including sending HTTP requests and receiving responses.

#### Data Storage

Manages the browser's data storage, such as cookies, local storage, and indexedDB.

#### Add-ons and Extensions

Allows users to customize their browser experience with additional functionality through add-ons and extensions.

#### Security and Privacy

Provides security and privacy features such as browser encryption and blocking third-party cookies

## How does the browser fetch the desired result ?

![App Screenshot](https://i.ibb.co/ydBTF36/How-The-Web-Works.webp)


#### The browser checks the cache for a DNS record

When a user enters a URL in the browser, the browser first checks its local cache to see if it has a recent DNS (Domain Name System) record for the domain name in the URL. The DNS record contains the corresponding IP address of the server hosting the website. If a recent DNS record is found in the cache, the browser uses that IP address to send a request to the server. This can greatly reduce the time it takes to resolve a domain name to an IP address, as it eliminates the need to query a DNS server on the internet.

#### If the browser does not find a recent DNS record in the cache

If the browser does not find a recent DNS record for the requested URL in its cache, it will initiate a DNS query to the ISP's DNS server. The DNS server acts as a directory service that maps domain names to IP addresses. The browser will send a request to the ISP's DNS server with the domain name "maps.google.com", and the DNS server will then look up the corresponding IP address in its own cache or in the authoritative DNS server. Once the IP address is found, it is returned to the browser.

#### The browser initiates a TCP connection with the server

Once the browser has the IP address of the server that hosts the website, it will initiate a TCP (Transmission Control Protocol) connection with the server. TCP is a transport protocol that is used to establish and maintain a reliable connection between the browser and the server. It ensures that data is transferred correctly and in the right order. The browser establishes a TCP connection with the server by sending a SYN (synchronize) packet to the server, and the server responds with a SYN-ACK (synchronize-acknowledge) packet. This process is called the "TCP three-way handshake". Once the connection is established, the browser can send a HTTP request to the server for the requested resource.

#### The browser sends an HTTP request to the webserver

Once the browser has established a TCP connection with the server, it will send an HTTP (Hypertext Transfer Protocol) request to the web server for the requested resource. HTTP is the protocol used for communication between the browser and the server. The HTTP request contains several parts, including the method (such as GET or POST), the URL, and any additional headers (such as the Accept-Language header) that provide additional information about the request. Once the server receives the request, it will process it and return a response, which can include the requested resource (such as an HTML page), as well as other information such as the status code (such as 200 OK) and any headers that provide additional information about the response.

#### Browser starts by parsing the HTML code

The browser starts by parsing the HTML code of a web page, and creating a Document Object Model (DOM) tree, then it parses the CSS code of a web page, and creates the CSS Object Model (CSSOM) tree. After that, it combines the DOM and CSSOM trees to create the Render Tree, which represents the layout and presentation of the web page. The browser then parses any inline JavaScript code, and any external JavaScript files that are referenced in the HTML and execute the parsed JavaScript code, After that, the browser uses the Render Tree to layout and render the web page.

## Summary

That concludes the process of how a browser fetches and displays a web page to the user. The process starts with the user entering a URL in the browser, and the browser checking its cache for a DNS record to find the corresponding IP address of the server hosting the website. If the DNS record is not found in the cache, the browser initiates a DNS query to the ISP's DNS server to resolve the domain name to an IP address. Once the IP address is obtained, the browser establishes a TCP connection with the server and sends an HTTP request for the requested resource. The server then responds with the resource, which is typically an HTML page. The browser then uses the HTML parser, CSS parser, and JavaScript engine to create the Document Object Model (DOM), CSS Object Model (CSSOM) and Render Tree, and use them to layout and render the web page. The browser then displays the rendered web page to the user.

