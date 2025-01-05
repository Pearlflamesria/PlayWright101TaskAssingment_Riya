# PlayWright101TaskAssingment_Riya
playwright 101 certification task 2 assignment
# Assignment_PW101

#Steps:
1. Clone the Assignment-PW101 repository on your system.
        
        git clone https://github.com/Pearlflamesria/PlayWright101TaskAssingment_Riya
2. Navigate to PlayWright101TaskAssingment_Riya

        cd PlayWright101TaskAssingment_Riya
4. Install the dependencies:
       
       npm install
       npx playwright install
4. In order to run your Playwright tests, you will need to set your LambdaTest username and access key in the environment variables. Click the Access Key button at the top-right of the Automation Dashboard to access it.
5. Configure your LambdaTest authentication credentials.

Windows-

    set LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
    set LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"

macOS/Linux-

    export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
    export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"

6. Pass the below command to run the test.

    i. To run tests on Chrome on MacOs and Firefox on windows in parallel on Lambdatest cloud:    

        npm run test-firefox-win-chrome-mac 
    
    ii. To run tests on Chrome and Firefox on windows in parallel on Lambdatest cloud:    

        npm run test-firefox-chrome-win
    
    iii. To run tests on Chrome and Firefox on MacOs in parallel on Lambdatest cloud:    

        npm run test-firefox-chrome-mac
    
    iv. To run tests on Chrome on windows and Firefox on MacOS in parallel on Lambdatest cloud:
    
        npm run test-firefox-mac-chrome-win 
    
    v. To run tests on Chrome on MacOs on Lambdatest cloud:
    
        npm run test-chrome-mac
    
    vi. To run tests on Firefox on MacOs on Lambdatest cloud:
    
        npm run test-firefox-mac
    
    vii. To run tests on Chrome on Windows on Lambdatest cloud:
    
        npm run test-chrome-win
    
    viii. To run tests on Firefox on Windows on Lambdatest cloud:
    
        npm run test-firefox-win

