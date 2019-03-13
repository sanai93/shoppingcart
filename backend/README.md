# LatAm ProVida EOS API
This is the API project that connects to Chile Big Data to return the data for each API endpoint.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing.

### Prerequisites
Make sure to also download the Eureka and Zuul projects, "mdp-child-eos-eureka" and "mdp-chile-eos-zuul", respectively. You will need kerberos configuration in order to connect to the database. Create a folder in your C drive that should have the path C:/kerberos-local/kerberos/dev and within the dev folder you need the jaas_local.conf and krb5_local.conf files.

### VM Arguments
Make sure to have the following arguments under run configurations > VM arguments for each project.

Eureka: 
```-Dspring.profiles.active=primary -DdefaultZones=http://localhost:9080/eureka -Dserver.port=9080```

Zuul: 
```-Dserver.port=8888 -DdefaultZones=http://localhost:9080/eureka```

API: 
```-Dserver.port=9082 -DdefaultZones=http://localhost:9080/eureka```

### Building the application
You can build mdp-chile-eos-api by executing the following command:
```
gradle clean eclipse build
```

This will download all dependencies from Metlife's internal Artifactory, generate eclipse project files for importing, and compile/build the application. 

### Running
Assuming Eureka and Zuul is also running, you can start this application in eclipse. Once it is registered with Zuul, you can hit:

http://localhost:9802/agents/

To get a sample response back. If there is trouble connecting to the database, ensure your kerberos configuration is set up properly and in the correct location.