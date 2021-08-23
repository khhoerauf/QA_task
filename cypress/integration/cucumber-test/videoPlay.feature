Feature: Playing video

    Scenario: The template loads

        Given open video in browser 
        Then the template is loaded the video is visible

    Scenario: Verify Skip button 

        Given wait for 5 seconds
        When click on Skip button  
        Then hubContainer is visible
        And Chartboost.Utils.click was NOT called

    Scenario: Verify hubContainer

        Given open endcard view
        When click on hubContainer   
        Then Chartboost.Utils.click was called
         