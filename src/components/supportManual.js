export const supportManual = `
Welcome to the CPABC IT Support Chatbot — your virtual assistant for navigating the External IT Support Manual.
Just type your question, and I’ll do my best to provide accurate, helpful information based on the support manual.
Please only refer to manual content, and give the page that the information can be found

Support Manual
Post Refresh https://corporate.bccpa.ca/it/appdev/_layouts/15/start.aspx#/iMIS%20Knowledge%20Base/Daily%20Tasks.aspx
* PR is something that needs to be done anytime a testing site (ie. PTP1, UAT2, PPR1, TST3) in the Dev Environment is refreshed. Whenever a testing site is refreshed, you will receive a message from someone on Jira sent directly to your personal bccpa.ca email asking you to perform the post refresh steps for that particular site. After PR, the testing site is prepped up and will be ready to use for testing. Our job is to run this PR automator to completion.
* Instructions to perform PR:
o Enter iMIS Dev Environment (you will need to have an account created)
o Have someone (probably Earl) help you create PR desktop shortcut icon
o Afterwards, run it for PTP1 everyday (the process is automated)
* Check back intermittently. If the refresh fails (errors out), make note of the unchecked boxes. Close the browser window and the PR executable. Then, re-open PR, uncheck the boxes that were unchecked from the previous run, and run again.
* Once successful, add a comment to JIRA-56 noting PTP1 s PR run completion (ie.  PTP1 post refresh done ).
o If PR doesn t error out, but is stuck on one checkbox for a while (20-30 mins) and there is no progress (ie. on the browser, the progress bar is not increasing in percentage done), this means that PR is failing (it is stuck). Post in JIRA-105 that PR for the site you are refreshing is failing, ask Leo, Serge, or Cliff to purge and recycle, and attach a full screen screenshot of the PR site screen.
o The MFA step in the post-refresh is NOT automated and needs to be completed manually
* For PTP and UAT2, do not remove MFA, please skip this step
* In both of the below directories on the test site you are running the post-refresh for: remove the MFA band, then click save and publish
* Staff view > RiSE > Page Builder > Manage Content > CPABC Member > Content Areas > Header Logo
* Staff view > RiSE > Page Builder > Manage Content > PD Registration > Content Areas > Header Logo
* This final step can be skipped for the PTP1 test site, and also for the UAT2 test site upon request
o One more step needs to be done manually for the post-refresh:
* Settings > About iMIS > Click on "Resync" 

UserID or Email Mismatch
* This report (generated every morning and sent to your helpdesk email) provides a list of data in iMIS where the username login credentials and CPA ID are mismatched. Our job is to make sure the user name and CPAID match.
* Instructions:
o Identify which rows have both the user name field and CPAID field data present in the report that do not match (ignore ones where the CPAID field is empty, staff accounts, and testing accounts)
o Copy the iMIS ID, go to iMIS Staff View, and look for it under Security > Users (Remember to change query to Contacts)
o Next to logon, click on the red X. This removes their user credentials.
o Next to logon, click on the plus symbol to create the new user credentials.
o Input their CPA ID as their Logon ID, and give them a random password (such as cpabc.123!, I think it's best to come up with your own that you can remember - this is just an example. It would probably be even better to use something randomly generated from a computer)
o Save it by clicking the save button on the lower right
o Send each person a reset password link using the  Forgot Password  link on services.bccpa.ca

Missing User Credentials for SCAN and SPRE member types
* Go to iMIS Staff View and in the side bar scroll down and click on Custom Reports > CPA SSRS Reports
* Click IT > Missing User Credentials
* This generates a report with all iMIS ids of SCAN and SPRE records that do not have user credentials created
* These need to be created manually one at a time. Due to the large number of records this will take a while
o When you have spare time, go through a few records and create the user credentials using their CPA id for the username

Profile information sync verification
* This a data discrepancy issue, to fix it we will manually trigger the iMIS sync system
* To fix:
o Go to iMIS Staff View and locate the person's profile using Find Contact.
o On their profile, click on the pencil under either Resedential or Employment depending on the discrepancy.
o Copy the phone number (for example) into clipboard, remove it from iMIS (you can also use the cut function to copy and remove from iMIS at the same time), then hit save.
o Paste the number back into iMIS, then hit save. This should trigger the iMIS sync system. Check tomorrow s PISV to see if the record disappears.
o If the discrepancy is that the system think they have a phone number inputted, but when you check their account on iMIS Staff View and see no phone number, then simply take the phone number from the PISV email, paste it into the respective member s profile (residential or employment), save it, then delete the phone number from the profile, and save it again to trigger the iMIS sync system.
* Since the most recent PISV request would contain information from the previous ones, you can just refer to the most recent PISV request and ignore the earlier ones. If you do this, add a note to the previous ones saying that you referred to the most recent one (Add Notes button in the conversation bar at the end of the original message).

Report Phishing
* Every now and then you will get emails that are from "Beautiful Women" and "Businessmen" with opportunities for you. You can report these emails and others like them by forwarding them to phishing@bccpa.ca.
* After reporting them, you can close the ticket.

 Daily iMIS Update: LMS On Demand course Completion
* This is mainly for CPD, it is to monitor the docebo pullback
* You can close the ticket when it comes into the inbox
* These emails should be sent to the support inbox everyday, check and make sure that the support inbox receives it everyday. If you notice that it has not been sent, please alert the QA team about it.

How to locate Someone in iMIS, https://corporate.bccpa.ca/it/appdev/_layouts/15/start.aspx#/iMIS%20Knowledge%20Base/How%20to%20locate%20Someone%20in%20iMIS.aspx

How to locate a Member/Student/Staff in iMIS
* Log in to https://imisstaff.bccpa.ca
* Click on Find Contact
* You can search by CPA ID, email, or other information depending on what you have
* Click on the blue iMIS ID hyperlink to go to their contact page/profile

Requestor provides information that is not found in iMIS, https://corporate.bccpa.ca/it/appdev/_layouts/15/start.aspx#/iMIS%20Knowledge%20Base/Requestor%20provides%20information%20that%20is%20not%20found%20in%20iMIS.aspx
 
* Ask how they registered for an account at CPABC
* If requesting a transcript, ask which legacy body they are requesting for
* Often times these will be over the phone from someone intending to call College of Chiropractors of BC (CCBC) or some sort of home/business security system company
* Sometimes these requests may be students from CPAWSB, usually I ask if they are a CPA student/candidate and direct them to the CPAWSB login page 

File upload error, https://corporate.bccpa.ca/it/appdev/_layouts/15/start.aspx#/iMIS%20Knowledge%20Base/File%20upload%20error.aspx
This usually happens when they are completing their application for CPABC Membership. Below is a template:

Thanks for reaching out. There are a couple things we can try:
* Confirm that file size is indeed < 5M
* Try personal laptop (not work laptop)
* Try resaving the pdf file as a new file using save as
* Try screenshotting the file and sending the screenshot picture as the file (use JPEG)
* Name the file with more than 4 characters
* Try another web browser (Chrome -> Firefox -> Edge)
If those things don't work, let us know and we can schedule a live zoom troubleshooting session to take a look at the issue. 

For the zoom troubleshooting session:
* NOTE: Applicants are not allowed to email any part of their application to you. You can, however, screenshot through zoom screen share
* Confirm the file is indeed <5 MB
* Try personal laptop (not work laptop)
* Try resaving the pdf file as a new file using save as (use print function -> save as PDF)
* Try screenshotting the file and sending the screenshot picture as the file (use JPEG)
o On Edge, use Web Capture
o Paste on Microsoft Paint
* Name the file with more than 4 characters
* Try another web browser (Chrome > Firefox > Edge)
* Generate Image from scratch
o In Adobe Acrobat, right click anywhere in the pdf > Select tool
o Select the image, copy it, then open Microsoft paint
o Resize > 50% both sizes > Crop
o File > Save as JPEG
* File explorer > View > File name extensions > Rename file > go all the way to the right and press the delete button to remove any white spaces the right of the file name
* If all that fails, log in on behalf of the member

Problem paying dues , https://corporate.bccpa.ca/it/appdev/_layouts/15/start.aspx#/iMIS%20Knowledge%20Base/Problem%20paying%20dues.aspx

* Our system only accepts VISA or MasterCard, not VISA Debit nor MasterCard Debit nor AMEX
* If it is giving a  This order requires a valid shipping address , go in iMIS and see if an address exists in either employment or residential and if it is the preferred shipping address. If there is an address and it is not preferred, make it so.
* If it is giving a  You are unable to proceed as we cannot verify your IP address. Please try logging on with a different device  it is because they don t have location services enabled on their device/browser. Ask them to enable location services or use a different device.

GST Exemption error , https://corporate.bccpa.ca/it/appdev/_layouts/15/start.aspx#/iMIS%20Knowledge%20Base/GST%20Exemption%20error.aspx
For users who aren't able to take advantage of the GST exemption when they should be able to:
* Try using google chrome to access online services
* Try enabling location services and popups in browser settings
* If using Microsoft Edge, turn off tracking preventions on this site in browser settings
* Sometimes a company network could be restricting the above the changes. Try changing networks or use a personal computer.
* If the above do not work, try using a different device such as a phone

 Account Access Issues, https://corporate.bccpa.ca/it/appdev/_layouts/15/start.aspx#/iMIS%20Knowledge%20Base/Account%20Access%20Issues.aspx
If someone says they cannot get into their account there are many possible causes. The account could be locked, disabled, they might need to clear their cache, or they may even be entering their password incorrectly.
The first step is to find their account in iMIS
1. Find the person in iMIS with their CPA ID, email, phone number, name, etc...
2. Grab their iMIS ID
3. Go to Security -> Users and select 'All Contacts (People)' as the query
4. Search for the person using their iMIS ID
This will bring up their user credential page. (Alternatively, if the user is a member since their username will be their CPA ID you can search directly with their CPA ID making sure to switch the query to 'All Users')

Now we need to identify the issue
* If the account is locked out it will say so. Simply click the pencil icon to unlock the account.
* If the account is disabled, then uncheck that box and hit save. 
* It's also possible that the account is expired, simply update the expiration date to 5 years from now and hit save.
In all these cases, you should send an email to the user using the "Locked Account" email template.

It's possible that their user credentials aren't created yet. If so, click the plus sign to create their user credentials with a random password. 
1. If they are a member/student use their CPA ID as the username 
2. If they are a non-member use their email as the username
In either case, send them an email letting them know they should now be able to log in with instructions on how to reset their password.
What if nothing seems wrong with their account
One possibility is that this is a cache issue. A sign of this is if there is log in activity right before they sent the email saying they can't log in. This is because our system registers that they logged in and that it was succesful, but the issue is on their system.
Another possibility is that their MFA is locked, not their account.
You can also send a follow up email, asking them to send a screenshot/description of any error messages they encounter when trying to log in.

MFA Lock, https://corporate.bccpa.ca/it/appdev/_layouts/15/start.aspx#/iMIS%20Knowledge%20Base/MFA%20Lock.aspx
* Every member/non-member account in iMIS has the option to opt into Multi-Factor Authentication (MFA) after signing. The choice is up to them whether or not they wish to opt into MFA. It is advised that they have a working phone number that can accept text messages and an email so they can receive the confirmation codes. 
* If their account is locked due to MFA: 
o Turn off MFA in iMIS and ask them to refresh their page and try again 
o Ask them after they are able to get into their account if they would like MFA on or off 
o Note: emails such as gmail, yahoo, outlook, etc. will work for MFA. Government emails and the like might run into some issues

To turn off/on MFA
1. Find the perrson in iMIS
2. Scroll down to 'Multi-Factor Authentication' on their profile
3. Click the '*' or editable version
4. Click the pencil icon, make the desired changes (Under 'Status' change 'Lock' to No), and click save
5. Under 'Most Recent 6 Attempts' click on the + icon
6. In the dropbox under 'MFA Attempt Status' change to Unlocked
7. Click on Save & Close

Mobile Layout Issues , https://corporate.bccpa.ca/it/appdev/_layouts/15/start.aspx#/iMIS%20Knowledge%20Base/Mobile%20Layout%20Issues.aspx
Log out button missing/overlay issues on mobile
* Our website uses Bootstrap which supports mobile view. We have a layout issue where the mobile view cannot fit the logout button usually in the top right corner.
* The simplest solution is to tell the user that the system will automatically timeout (log out) after 15 minutes of inactivity.
* If the user insists on logging out themselves, you can ask them to enable Desktop mode for the website and sign out that way. This process may work differently on iOS/Safari so look it up beforehand!
Generally, the mobile is site is poorly layed out and harder to navigate compared to the desktop site. When possible, I recommend members use the desktop site. I also recommend you log in to member view on the mobile site to play around with it and see how to navigate to better assist members

Pencil Icon Missing When Member Tries to Edit Personal Information, https://corporate.bccpa.ca/it/appdev/_layouts/15/start.aspx#/iMIS%20Knowledge%20Base/Pencil%20Icon%20Not%20Showing.aspx
* If a member reports that they can not see a pencil icon to edit their info then they are most likely using Safari. There is a bug in which the pencil icon does not show in Safari.
* Solution is to recommend the member to use a different browser such as Google Chrome, Microsoft Edge, or Firefox

Firewall issues , https://corporate.bccpa.ca/it/appdev/_layouts/15/start.aspx#/iMIS%20Knowledge%20Base/Firewall%20issues.aspx

If someone has a firewall service that is blocking access to our CPABC sites, you can suggest them to bypass the following 4 IP s for our site as well as whitelist bccpa.ca sites.
* www.bccpa.ca (192.149.104.5)
* services.bccpa.ca (192.149.104.6)
* pdregbccpa.ca (192.149.104.8)
* pd.bccpa.ca (192.149.104.43)
Nord VPN in particular causes issues for our site. Even if the VPN is disabled, NordVPN Threat Protection may still be active and it will block our sites. 
* If a member is having issues accessing our site, and their connection is otherwise working it may be because they use Nord VPN
* I couldn't find a way to add Online Services (https://services.bccpa.ca) to its whitelist (although for some reason I could add the PD sites), so the only solution is to disable Threat Protection while using Online Services.

Currency, https://corporate.bccpa.ca/it/appdev/_layouts/15/start.aspx#/iMIS%20Knowledge%20Base/Currency.aspx
All payments on our website are done in CAD $ currency, no matter what is displayed on the screen. Some people might have a different currency displayed, and that is usually a browser setting problem where the user has set their language to "EN-GB" instead of "EN-US" to get better Canadian spelling. Google Chrome does not recognize the "EN-CA" language code as a distinct dialect of English.

Someone Wants to Login on Member's Behalf, https://corporate.bccpa.ca/it/appdev/_layouts/15/start.aspx#/iMIS%20Knowledge%20Base/Someone%20Wants%20to%20Login%20on%20Member's%20Behalf.aspx
* Member will need to express permission, preferably in an email, to allow someone else access to their account
* Under special circumstances, the member may allow someone full permission to access account and change password.  Confirm with member that the person will log in on their behalf.
* To confirm the member's identity, the person will need to produce the member's name, CPA user ID, and date of birth
* Passwords cannot be given to anyone beside the member
* Instruct the person how to retrieve a password reset email, which will be sent to the member's preferred email address on the profile

CPABC Member Wants to Login to CPA Canada Websites, https://corporate.bccpa.ca/it/appdev/_layouts/15/start.aspx#/iMIS%20Knowledge%20Base/CPABC%20Member%20Wants%20to%20Login%20to%20CPA%20Canada%20Websites.aspx
* Logins on services offered by CPA Canada are separately managed by CPA Canada. Direct the member/student to CPA Canada for login assistance. 1-800-268-3793
 
Yukon Member Wants to Login to Online Services, https://corporate.bccpa.ca/it/appdev/_layouts/15/start.aspx#/iMIS%20Knowledge%20Base/Yukon%20Member%20Wants%20to%20Login%20to%20Online%20Services.aspx
* Yukon members are managed by CPABC. Yukon members will have a username that begins with a  Y"
* Yukon members will contact CPABC (you) for services, such as reporting CPD hours. 

Email in system is incorrect, https://corporate.bccpa.ca/it/appdev/_layouts/15/start.aspx#/iMIS%20Knowledge%20Base/Email%20in%20system%20is%20incorrect.aspx
If they have access to their CPABC online services account they can update their emails online. Once they are logged in, they have to go into their Profile > Profile Information, to edit their email they simply have to press on the pencil icon. 
If they cannot log in, please forward such requests to memberrecords@bccpa.ca, we do not have authorization to update emails or any information in a member's profile.

 Difficulty Changing Password, https://corporate.bccpa.ca/it/appdev/_layouts/15/start.aspx#/iMIS%20Knowledge%20Base/Difficulty%20Changing%20Password.aspx
  If a user has great difficulty changing their password with the standard process, then you may follow the below procedure:
1. Confirm the user is who they say they are. For example call the number on their iMIS profile or ask verification questions such as address/date of birth
2. Turn on 2FA for the account
3. Set a randomly generated password for the user in staff view (I recommend something with random letters and numbers which should encourage them to change it instead of just keeping the temporary password you set, can use a computer to randomly generate)
4. Send two emails to the user. One containing the temporary password, the other containing log in instructions
5. Ask the user to change their password once they log in, in Online Services which does not require reCAPTCHA verification
6. Delete the email from your "sent" inbox (and then from "deleted items" inbox)
Template below:
Hi [Name],
I have sent you a seperate email containing the temporarry password to your CPABC Online Services account. Your username is your CPA ID starting with the letter C.
After you log in, please update your password to something of your choosing by navigating to Profile > Change Password. This bypasses the standard verification and email process.
If you run into any issues or have any questions, please let me know by responding to this email.
Best regards,
[Your Name]

  Users in China are not able to reset their password using the forgot password link. They get an error message:  Verification Failed  no matter what browser, computer, or network they use. It is because reCAPTCHA is from Google which is blocked in China. Even if we send them a reset password email they can click the link and enter their new password, but when they try to confirm their password they get the same error. The above procedure is most commonly used in this case.
A VPN can get around the issue for members in China, but I don't feel comfortable reccomending people to use a VPN when I don't know exactly what the laws are around them.
This reCAPTCHA issue becomes more of a nuissance when members from China try to pay their dues. Since we use reCAPTCHA to validate payments, the only way members in China can pay is using a VPN or contacting our finance team to pay over the phone. 

Transferring to-from other Provinces, https://corporate.bccpa.ca/it/appdev/_layouts/15/start.aspx#/iMIS%20Knowledge%20Base/Transferring%20to-from%20other%20Provinces.aspx
General issues with provincial membership transfer
* "Forward to cpabcapplications@bccpa.ca 
* Or forward to registration_confirmations@bccpa.ca
Nothing happens when clicking  Apply for Membership - CPAs from other province  
* Forward to cpabcapplications@bccpa.ca
* For these individuals; their account access was set up wrong. They need to be Member Type: PendingProvTrans; Status: Pending Application. The three who had this issue at the time of writing were set up with Status: Active.

Updating membership status from international to Canadian,
Forward to professionaladvisory@bccpa.ca

International Inquiries
Forward to CPABCInternationalInquiries@bccpa.ca

Membership Application tab not visible, https://corporate.bccpa.ca/it/appdev/_layouts/15/start.aspx#/iMIS%20Knowledge%20Base/Membership%20Application%20tab%20not%20visible.aspx
* Ask to wait 24-48 hours
* There could also be something wrong with the way their account was set up in iMIS
o Check their member status under the CPABC Member tab and also their application status under the Membership Application tab

Reapply-Resume-Resign-Cancel membership
Forward to members@bccpa.ca

Membership Dues
Forward to membershipdues@bccpa.ca

 INC Permit Renewal, https://corporate.bccpa.ca/it/appdev/_layouts/15/start.aspx#/iMIS%20Knowledge%20Base/INC%20Permit%20Renewal.aspx
* Usually forwarded from Public Practice
* Can check in developer site using PTP1
o Log in with their CPA ID
o Click Public Practice
o Corp Renewal
o Click on their company
o Check to see if they have completed the form and paid
* Can also check using iMIS
o Click on Relationship tab on their profile
o Click on their company
o Activities tab
o All tab, then hit find
o See if they have any INC product code activities

 Letter of good standing
The member can get this letter themselves from online services:
* Log in to https://services.bccpa.ca
* Under the profile tab click "Member in Good Standing Letter"
* At the bottom of the page: "Click here to proceed to download"

Registration
Forward to recruitment@bccpa.ca

Membership Confirmation
Sometimes you will get an email from a member wanting confirmation of their membership status with CPA BC. Send these inquiries to membership_confirmation@bccpa.ca

New Enrollments, https://corporate.bccpa.ca/it/appdev/_layouts/15/start.aspx#/iMIS%20Knowledge%20Base/New%20Enrollments.aspx
If anyone wants to get enrolled in CPABC program or become a new member, 
* Forward them to CPAWSB or Recruitment team at recruitment@bccpa.ca / 1800.663.2677
* If someone s already a member and wants to transfer to CPABC through Mutual Recognition Agreement (MRA), transfer to Robert Bansal

 Member or Student wants to log in for PD Seminar Registration, https://corporate.bccpa.ca/it/appdev/iMIS%20Knowledge%20Base/CPABC%20Member%20or%20Student%20wants%20to%20log%20in%20for%20Professional%20Development%20(PD)%20Seminar%20Registration.aspx
* The same login credential is used for CPABC Online Services and the PD website.  Follow the same procedure under Section 2 for login support.
* When students log in to the Online Services, they will receive an error message  You do not have access to Online Services." The username and password will still work on the Professional Development website.
* NOTE: The Professional Development seminars hosted by CPA Canada on PD Net at https://www.cga-pdnet.org are managed separately by CPA Canada. Direct the member/student to CPA Canada for login assistance. 

Non-member wants to log in for Professional Development Seminar Registration, https://corporate.bccpa.ca/it/appdev/iMIS%20Knowledge%20Base/Non-member%20wants%20to%20log%20in%20for%20Professional%20Development%20Seminar%20Registration.aspx
* Non-members,  who are not members or students, are able to register for PD seminar
* When non-members log in to the Online Services, they will receive an error message saying they have limited access to the site. The username and password will still work on the Professional Development website.
* If non-member is in iMIS:
1. Locate non-member in iMIS
2. Ensure status is Non member and Active
3. Click on User Credential
4. If User Credential is created, provide Logon to non-member as username. Non-member can reset password as usual on Online Services.
5. If there is no user under User Credentials, you will need to create one
1. Click on red + button
2. Enter their email for their username
3. Create a temporary password
4. Click Save
5. Send them a Does not know password email template.
6. Non-member can reset password as usual on Online Services
* If non-member is not in iMIS, contact PD department at pdreg@bccpa.ca in order to set up their account 

Deleting a Non-member Profile, https://corporate.bccpa.ca/it/appdev/iMIS%20Knowledge%20Base/Deleting%20a%20Non-member%20Profile.aspx
* If a non-member wants to delete their account please follow these instructions
1. Verify if there were any transactions made by the non-member. I would confirm with Earl on this.
2. Delete the User credentials.  Go to Security > Users. Search the iMIS ID and click into the profile. Click on the red X button to delete. 
3. Navigate to Find Contact. Search iMIS ID and click into profile. 
4. Click on the "About Non-Member*" tab, ensure you have clicked into the one with the *. 
5. Under Contact Status, click on the pencil icon. Change the status to "Delete - Marked for"

Docebo Seminar Zoom access, https://corporate.bccpa.ca/it/appdev/iMIS%20Knowledge%20Base/Docebo%20Seminar%20Zoom%20access.aspx
* Moving forward in 2021, Professional Development seminars will no longer be hosted under CPA BC platform, but moved to Docebo.
* In most cases, arriving early to the Docebo Zoom link for seminar (15 minutes or more) would result in an error to contact administrator. This issue will resolve itself when the seminar is 5 minute from starting, as it needs time to sync the registration list. 
* Otherwise, contact pdtechhelp@bccpa.ca and they will provide the member with the direct URL to the Zoom seminar. If on phone, forward the call to Jelena Ninkovic. 

 Flexi Passports , https://corporate.bccpa.ca/it/appdev/iMIS%20Knowledge%20Base/Flexi%20Passports.aspx
* PD passports are available to members and public to save money when registering for multiple seminars
o Personal PD Passport: For individual CPABC members only. This passport is non-transferable, only the Passport holder can use it.
o Flexi PD Passport: For company-wide training or group savings. Anyone can buy it, and anyone can use it.
* Asking how to register for courses using passport credits
* Purchased for whole team, but under their name (one name)
o Just share flexi passport number to co-workers and they can apply the credits on their accounts using that number

PD course submit button gives blank screen, https://corporate.bccpa.ca/it/appdev/iMIS%20Knowledge%20Base/PD%20course%20submit%20button%20gives%20blank%20screen.aspx
* Try removing everything from cart, logging out, logging back in again, adding everything back again (essentially go through the process again)

Info About Courses, https://corporate.bccpa.ca/it/appdev/iMIS%20Knowledge%20Base/Info%20About%20Courses.aspx
Useful things to know about Professional Development Courses:
* Each course has a unique Course Code.
* To view a course s details, and edit them, log in to staff view - https://imisstaff.bccpa.ca/staff, click on  Find Events , and look up the event (or click on  Event Listing  and type in the Course Code)
Some Professional Development courses are offered online by CPABC, mostly  AudioWebs . These will often be available  On-Demand , meaning that once registered, the registrant will be able to access the course material and take the  quiz  for that course. If the quiz is passed, the will receive an online  Certificate  for that course (NO LONGER VALID, MOVED TO DOCEBO)
Course Material
1) There are 3 types of material a PD course can offer:
* Course Material (main course material)
* Pre-work (material before course starts)
* Post-work (material after course starts)
To view them or make any changes to when they are available:
1. Log in to Staff View
2. Look up the course by clicking  Events  ->  Find Events  or  Event Listing 
3. Click on the course, and then  Edit  on the right hand side.
4. Click on the  Material  tab on the right hand side.
Notes about Material:
* The initial available  from  and available  to  dates are pre-populated based on the course s  start  date (If we change the course s start date, then those dates will change)
* If today is within a material s available  from  and  to  date, a zip file will be displayed online for users to download on Online Services. If not, no zip file will be displayed.
* Any changes made in the  Material  tab will be saved without actually hitting the  Save  button, so be careful when navigating the live site.
Course Quiz
The quiz for an Online Course will be available for a registrant to take on Online Services, under  Professional Development  ->  Registration History and Material , under the course s info by clicking  Take the quiz  link if the following 3 conditions are satisfied:
1. There are questions uploaded under the  Quiz  tab
2. Today is within the  Course Material  available  from  and  to  date
3. The Course s delivery format (Can be found under  Course Feature  in the edit page) is set to  Online On-Demand  or  Online Virtual
The member  passes the quiz  once they answer 3/5 questions correctly (randomized if more than 5 questions are uploaded), and are eligible for a certificate

Unexpected iMIS error while taking a PD quiz:
* Members who receive an iMIS error after submitting an online quiz needs to change their computer s region and language to English before taking the quiz. They can change it back to their original language/region afterwards. This error occurs because the backend database entries are setup in English, so any other language/format will cause an issue.
Third-Party courses and User Credentials
* There are online courses hosted by a third party (CFI, K2E, PLDP) on their own site.
* People are able to register for these courses on our PD website. Afterwards, we send them user credentials via email to access the course on the third party site, which requires some combination of username/pw/email/link etc.
* The credentials are provided by the third party, and we upload them to the database.
How User Credentials are uploaded to the database:
1. PD Staff receives user credentials from third party course.
2. PD Staff places an excel file called PDLinksAndCreds.xslx to G:\AutoFileUploads\ProfessionalDevelopment\LinksAndCredentials\Incoming. Each row in the file contains a Course Title, Username, Password, Link, Course Code.
3. The file is processed, checked, and confirmed to have no errors via a scheduled task.
4. This scheduled task runs from 8AM-6PM, every 2 hours, and checks for the file named  PDLinksAndCreds.xlsx  in G:\AutoFileUploads\ProfessionalDevelopment\LinksAndCredentials\Incoming. If there are no errors with the file, the user credentials from the file will be uploaded to the database.
5. If there are errors with the file, then the file will be rejected and credentials will not be uploaded to the database. The only exception to this would be duplicate rows within the file, which would only one copy of the  row  would be uploaded.
6. After a file has been processed, it will be removed from the  Incoming  folder, and an output file will be generated, with an additional column displaying whether or not there were any errors.
How User Credentials stored in the database are sent to a registrant:
* When someone registers for a course, if user credentials are available (Not been assigned to someone) in the database, then they will be assigned a credential in the database, and an email will be sent to them with their user credential information.
* When someone registers for a course, if user credentials are not available (no credentials uploaded, all existing credentials have been assigned already), then PD will have to upload additional credentials. There is a scheduled task that runs from 9AM-7PM, every 2 hours, that goes through all courses in the database, and if there are any courses with registrants waiting for credentials and there are available credentials for that course, then it will assign the next available credential to the registrant and send tem an email.
There are rare occasions where the PD team makes a mistake when uploading credentials, either before the file has not been processed yet (waiting in G:\AutoFileUploads\ProfessionalDevelopment\LinksAndCredentials\Incoming) or there are bad credentials already uploaded to the database.
There is a JIRA ticket in place, IMIS-126, which you can report the issue to a Leonardo Castro, and he will fix the issue depending on the scenario.

Cannot post hours, https://corporate.bccpa.ca/it/appdev/iMIS%20Knowledge%20Base/Cannot%20post%20hours.aspx
* If CPD hours do not appear in Online Services, or for general CPD matters / suspensions due to CPD reporting, contact Lisa Murray at lmurray@bccpa.ca
* If there is an error message like: "Web Page Blocked! The page cannot be displayed. Please contact the administrator for additional information." after trying to submit an activity. It is most likely because there are special characters in the activity description. Even special characters that it says are allowed like ! : ;  could cause issues.

Cannot access page to post CPD, https://corporate.bccpa.ca/it/appdev/iMIS%20Knowledge%20Base/Cannot%20access%20page%20to%20post%20CPD.aspx
* Sometimes members will try to post hours using a bookmarked URL that points to the  cpd posting  on IMIS member, in that case, ask the member to go to services.bccpa.ca and navigate to  CPD posting  manually.
o This is a cache issue, to confirm, ask member for the URL. If it shows 404 in the link, then it is an expired link. Ask member to clear cache and enable cookies to fix this issue.

CPABC Member or Student wants to log in to Careers Website, https://corporate.bccpa.ca/it/appdev/iMIS%20Knowledge%20Base/CPABC%20Member%20or%20Student%20wants%20to%20log%20in%20to%20Careers%20Website.aspx
* CPABC Members, CPA PEP candidates, legacy CMA students, and legacy CA students will use their CPA user ID and password to log in the Careers website. This is the same username and password for CPABC Online Services.
* CPA Students will only have access if they are enrolled in CPAWSB and have paid all necessary fees. If the student has recently paid they will need to wait till the next business day before iMIS is updated and their record in added.

Email is taken error, https://corporate.bccpa.ca/it/appdev/iMIS%20Knowledge%20Base/Email%20is%20taken%20error.aspx
* Due to merging error, forward to careers@bccpa.ca 
* If no one can be reached, contact Earl Moya at emoya@bccpa.ca

Employer wants to post or has trouble logging in, https://corporate.bccpa.ca/it/appdev/iMIS%20Knowledge%20Base/Employer%20wants%20to%20post%20or%20has%20trouble%20logging%20in.aspx
* Contact Careers at careers@bccpa.ca
* If by phone, transfer to Stephanie Roy or Angela Fong

Log in issue for members persists even after resetting password on Careers Website, https://corporate.bccpa.ca/it/appdev/iMIS%20Knowledge%20Base/Log%20in%20issue%20for%20members%20persists%20even%20after%20resetting%20password.aspx
* In this case, let Earl or a developer know to  recycle BC JOB App pool ; JIRA 746
* Make sure this is a multiple instance case (i.e., happening to more than one person)

PER or accessing PERT for the first time, https://corporate.bccpa.ca/it/appdev/iMIS%20Knowledge%20Base/PER%20or%20accessing%20PERT%20for%20the%20first%20time.aspx
If someone is having trouble logging in for their PER orientation they need to call CPA Canada
CPA Canada Contact Information:
Telephone: 416.977.0748
Toll free: 1.800.268.3793
Email: member.services@cpacanada.ca

Home Page > Practical Experience > Mentorship Issues
Forward to practicalexperience@bccpa.ca

Home Page > Practical Experience > Professional Experience Required for Certification (PERC)
Email: practicalexperience@bccpa.ca
Phone: Practical Experience Call Queue

Home Page > Practical Experience > Practical Experience Reporting Tool (PERT)
For questions about PERT mentor log in or PERT in general forward to practicalexperience@bccpa.ca and they will forward to stakeholder.
Email: practicalexperience@bccpa.ca
Phone: Practical Experience Call Queue

Home Page > Member and Student Services > Employment update, https://corporate.bccpa.ca/it/appdev/iMIS%20Knowledge%20Base/Employment%20update.aspx
* Members can update employment information in Online Services from the saved companies in the system
* If information in employment drop-down menu is incorrect, we will need to contact regulatory to update
* Forward employment update requests to Member Records at memberrecords@bccpa.ca

Home Page > Member and Student Services > Transcript Requests , https://corporate.bccpa.ca/it/appdev/iMIS%20Knowledge%20Base/Transcript%20Requests.aspx
Who these should be sent to depends on the person making the request.
* For CPAWSB students, tell them to contact CPAWSB directly. Their contact information can be found at https://www.cpawsb.ca/contact-us.
* For legacy body (such as CGA, CMA, CASB) requests, these can be forwarded to transcripts@bccpa.ca.

Home Page > Member and Student Services > Certificates , https://corporate.bccpa.ca/it/appdev/iMIS%20Knowledge%20Base/Certificates.aspx
* For issues regarding CPABC Member Certificates, contact certificate@bccpa.ca, or then following in order:   Robert Bansal at rbansal@bccpa.ca
* For Credit Transfer Request, Forward them to CPAWSB

Home Page > Member and Student Services > Fees and Receipts , https://corporate.bccpa.ca/it/appdev/iMIS%20Knowledge%20Base/Fees%20and%20Receipts.aspx
* To pay fees directly, contact Finance at finance@bccpa.ca or Amy Li at ali@bccpa.ca
* Membership Fees can be paid over the phone, transfer the member to Finance Team (ext. 1397)   To retrieve legacy receipts, contact Finance department at finance@bccpa.ca
* Receipts prior to July 6, 2015 did not transfer to Fusion iMIS

Home Page > Member and Student Services > CPA Dinner and Convocation , https://corporate.bccpa.ca/it/appdev/iMIS%20Knowledge%20Base/CPA%20Dinner%20and%20Convocation.aspx
* CPA rewards members, people for their exemplary service. 
* Contact Tara Ducheminsky regarding this topic at tducheminsky@bccpa.ca

Home Page > Member and Student Services > Student Advising , https://corporate.bccpa.ca/it/appdev/iMIS%20Knowledge%20Base/Student%20Advising.aspx
Email: advising@bccpa.ca 
* For CPAWSB, contact Andrew Bennett at abennett@cpawsb.ca
* For Legacy CGA student advising, contact Natalie Makortoff at nmakortoff@bccpa.ca
* For Legacy CGA student record requests, contact Karin Bury (CPAWSB) at kbury@cpawsb.ca
* For Legacy CGA transcripts, forward to transcripts@bccpa.ca or contact Cindy James at cjames@bccpa.ca
* For exams contact Karin Bury at kbury@cpawsb.ca

Home Page > Member and Student Services > CPA Insurance Plans , https://corporate.bccpa.ca/it/appdev/iMIS%20Knowledge%20Base/CPA%20Insurance%20Plans.aspx
If there is any enquiry about any kind of Insurance services offered by CPA, direct them to CPA Insurance Plans West (CPAIPW) at info@cpaipw.ca or 1800-661-6430

Home Page > Member and Student Services > Public Practice Dues , https://corporate.bccpa.ca/it/appdev/iMIS%20Knowledge%20Base/Public%20Practice%20Dues.aspx
* All practitioners are required to pay Public Practice License Renewal Fees each year. For Member-Partners, they require to pay this fees along with the Firm Renewal Fees.
* To pay this fees, they can go to Online Services > Public Practice > Firm Renewal / Practice License Renewal
* To begin with the application, the members need to pay the declaration form online and it cannot be sent to them by fax/paper because of its complications. Therefore, it has to be filled online.
* For any problem related to forms, or to make any changes to existing forms, transfer them to Kate Talmage or Danelle Sidor at publicpractice@bccpa.ca.
* For any payment related issues, transfer them to Finance team or Amy Li

Home Page > Member and Student Services > Editing Public Practice Declaration , https://corporate.bccpa.ca/it/appdev/iMIS%20Knowledge%20Base/Editing%20Public%20Practice%20Declaration.aspx
* For when member accidently proceeds after entering incorrect information on Annual Licence Renewal Declarations. Notify member that this will delete everything and they will need to re-enter all information.
* Ensure member is signed out of Online Services
* Locate member in iMIS
* Under the Practitoner tab, go to profile
* Find the most recent declaration
* Edit so that practitioner declare status is "Invalid"

Home Page > Member and Student Services > Practice Review
For queries about practice review, forward to: practicereview@bccpa.ca

Home Page > Other Issues > Undelivered Mail Returned to Sender , https://corporate.bccpa.ca/it/appdev/iMIS%20Knowledge%20Base/Undelivered%20Mail%20Returned%20to%20Sender.aspx
* Contact the person via phone (can find phone number by locating their account using the email), inform them that their email is bouncing emails from us, and if they have an alternative email for us to have on file. Update the new email on iMIS. Remember that you can only update the employment email.
* Add what you did in Resolution, then close the request.

Home Page > Other Issues > Knotia
Knotia is with CPA Canada. Forward to CPA Canada

Home Page > Other Issues > Events
(ie. convocation checkout page error, promotional code request) 
* Forward to events@bccpa.ca

Home Page > Other Issues > Member Records
Including ALL (except e-mail) modifications to their accounts to
* For Member Records, contact memberrecords@bccpa.ca

Home Page > Other Issues > Member Benefits
(i.e. phone plan)
Email: members@bccpa.ca for assistance

Home Page > Other Issues > Committee Member Unable to Access Committee Website , https://corporate.bccpa.ca/it/appdev/iMIS%20Knowledge%20Base/Committee%20Member%20Unable%20to%20Access%20Committee%20Website.aspx
* Committee Members log in to the committee website using regular Online Services login credentials  
* If Committee Member is a non-member, create their user credentials if needed.
* If Committee members is experiencing issues logging in, contact Ruby Chui at rchui@bccpa.ca

Home Page > Other Issues > Email Communications , https://corporate.bccpa.ca/it/appdev/iMIS%20Knowledge%20Base/Email%20Communications.aspx
* Mass email communications to members and students are sent by Communications department
o Can lead to system performance issues if not adequately spaced out
* If member cannot open link for the certificate email, advise them to go to https://www.bccpa.ca or https://services.bccpa.ca
* Members may experience issues trying to open a link that goes through Informz. Advise member to try links on a different browser
* If issue is in Google Chrome, send Google Chrome DNS issues template

Home Page > Other Issues > D2L
* Member Type Student (SPRE) in PREP 
o Email at prepmodule@cpawsb.ca
* Member Type Candidate (SCAN) in PEP
o Contact CPAWSB Edmonton Office at 1-866-420-2350

Home Page > Other Issues > Information Disclosure , https://corporate.bccpa.ca/it/appdev/iMIS%20Knowledge%20Base/Information%20Disclosure.aspx
* CPABC is bound by privacy laws that do not permit the release of someone s information without his consent
* Any personal information must not be disclosed, unless it is public information.

Home Page > Other Issues > Cache issues , https://corporate.bccpa.ca/it/appdev/iMIS%20Knowledge%20Base/Cache%20issues.aspx
From Wikipedia: A Web cache (or HTTP cache) is a system for optimizing the World Wide Web. It is implemented both client-side and server-side. The caching of multimedia and other files can result in less overall delay when browsing the Web. 
Basically, frequently accessed elements from the website can be stored (cached) on the user side to increase efficiency. This can lead to problems though when the data cached is out of date,. For example if the site had been under maintentance and that is cached, then the user might see a maintenance message from our site even though the site is no longer under maintenance. 
Below is a template to explain how to clear cache for most browsers on a Windows machine.
This is most likley a cache issue.
To clear your cache please follow the steps below
o Open your browser and press Ctrl + Shift + Delete simultaneously on the keyboard to open the clear browsing data window. (This works for Internet Explorer, Edge, Google Chrome, or Mozilla Firefox.)
o Select Cached images and files and cookies and other site data. Choose 'All Time' as the time range.
o Click Clear data or Clear browsing data.
o Close and restart your browser.
Please let me know if you have any further issues

Home Page > Other Issues > Duplicate Committee Members Deletion , https://corporate.bccpa.ca/it/appdev/iMIS%20Knowledge%20Base/Duplicate%20Committee%20Members%20Deletion.aspx
Earl will request you to manually delete duplicate committee members. Here are the steps on how to do that.
1. Navigate to Community > Manage Committee > Committee Members
2. Earl will tell you which tab to delete from. In my case I was deleting duplicates in the "Forums" tab. The tabs are located at the top. 
3. Under "Title" click into each group and if you see a duplicate, delete one of them. 
Example) This would be considered a duplicate. You can delete one of them by clicking on the red "X" button to the right. 

FYI. Some people may have different positions, if you see a person twice with different positions, that would not be considered a duplicate. If unsure, please ask Earl for confirmation. 
4. Continue down the list. Once you have gotten through each group let Earl know that you are done. 
`;