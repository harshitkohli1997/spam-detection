

var brain = require('brain.js');
const fs = require('fs');
var net = new brain.recurrent.LSTM();

const data = require('./dataset/data');

net.train([
    {
      output: "ham",
      input: "Go until jurong point, crazy.. Available only in bugis n great world la e buffet... Cine there got amore wat...",
      
    },
    {
      output: "ham",
      input: "Ok lar... Joking wif u oni...",
      
    },
    {
      output: "spam",
      input: "Free entry in 2 a wkly comp to win FA Cup final tkts 21st May 2005. Text FA to 87121 to receive entry question(std txt rate)T&C's apply 08452810075over18's",
      
    },
    {
      output: "ham",
      input: "U dun say so early hor... U c already then say...",
      
    },
    {
      output: "ham",
      input: "Nah I don't think he goes to usf, he lives around here though",
      
    },
    {
      output: "spam",
      input: "FreeMsg Hey there darling it's been 3 week's now and no word back! I'd like some fun you up for it still? Tb ok! XxX std chgs to send, �1.50 to rcv",
      
    },
    {
      output: "ham",
      input: "Even my brother is not like to speak with me. They treat me like aids patent.",
      
    },
    {
      output: "ham",
      input: "As per your request 'Melle Melle (Oru Minnaminunginte Nurungu Vettam)' has been set as your callertune for all Callers. Press *9 to copy your friends Callertune",
      
    },
    {
      output: "spam",
      input: "WINNER!! As a valued network customer you have been selected to receivea �900 prize reward! To claim call 09061701461. Claim code KL341. Valid 12 hours only.",
      
    },
    {
      output: "spam",
      input: "Had your mobile 11 months or more? U R entitled to Update to the latest colour mobiles with camera for Free! Call The Mobile Update Co FREE on 08002986030",
      
    },
    {
      output: "ham",
      input: "I'm gonna be home soon and i don't want to talk about this stuff anymore tonight, k? I've cried enough today.",
      
    },
    {
      output: "spam",
      input: "SIX chances to win CASH! From 100 to 20,000 pounds txt> CSH11 and send to 87575. Cost 150p/day, 6days, 16+ TsandCs apply Reply HL 4 info",
      
    },
    {
      output: "spam",
      input: "URGENT! You have won a 1 week FREE membership in our �100,000 Prize Jackpot! Txt the word: CLAIM to No: 81010 T&C www.dbuk.net LCCLTD POBOX 4403LDNW1A7RW18",
      
    },
    {
      output: "ham",
      input: "I've been searching for the right words to thank you for this breather. I promise i wont take your help for granted and will fulfil my promise. You have been wonderful and a blessing at all times.",
      
    },
    {
      output: "ham",
      input: "I HAVE A DATE ON SUNDAY WITH WILL!!",
      
    },
    {
      output: "spam",
      input: "XXXMobileMovieClub: To use your credit, click the WAP link in the next txt message or click here>> http://wap. xxxmobilemovieclub.com?n=QJKGIGHJJGCBL",
      
    },
    {
      output: "ham",
      input: "Oh k...i'm watching here:)",
      
    },
    {
      output: "ham",
      input: "Eh u remember how 2 spell his name... Yes i did. He v naughty make until i v wet.",
      
    },
    {
      output: "ham",
      input: "Fine if that��s the way u feel. That��s the way its gota b",
      
    },
    {
      output: "spam",
      input: "England v Macedonia - dont miss the goals/team news. Txt ur national team to 87077 eg ENGLAND to 87077 Try:WALES, SCOTLAND 4txt/̼1.20 POBOXox36504W45WQ 16+",
      
    },
    {
      output: "ham",
      input: "Is that seriously how you spell his name?",
      
    },
    {
      output: "ham",
      input: "I���m going to try for 2 months ha ha only joking",
      
    },
    {
      output: "ham",
      input: "So �_ pay first lar... Then when is da stock comin...",
      
    },
    {
      output: "ham",
      input: "Aft i finish my lunch then i go str down lor. Ard 3 smth lor. U finish ur lunch already?",
      
    },
    {
      output: "ham",
      input: "Ffffffffff. Alright no way I can meet up with you sooner?",
      
    },
    {
      output: "ham",
      input: "Just forced myself to eat a slice. I'm really not hungry tho. This sucks. Mark is getting worried. He knows I'm sick when I turn down pizza. Lol",
      
    },
    {
      output: "ham",
      input: "Lol your always so convincing.",
      
    },
    {
      output: "ham",
      input: "Did you catch the bus ? Are you frying an egg ? Did you make a tea? Are you eating your mom's left over dinner ? Do you feel my Love ?",
      
    },
    {
      output: "ham",
      input: "I'm back &amp; we're packing the car now, I'll let you know if there's room",
      
    },
    {
      output: "ham",
      input: "Ahhh. Work. I vaguely remember that! What does it feel like? Lol",
      
    },
    {
      output: "ham",
      input: "Wait that's still not all that clear, were you not sure about me being sarcastic or that that's why x doesn't want to live with us",
      
    },
    {
      output: "ham",
      input: "Yeah he got in at 2 and was v apologetic. n had fallen out and she was actin like spoilt child and he got caught up in that. Till 2! But we won't go there! Not doing too badly cheers. You?",
      
    },
    {
      output: "ham",
      input: "K tell me anything about you.",
      
    },
    {
      output: "ham",
      input: "For fear of fainting with the of all that housework you just did? Quick have a cuppa",
      
    },
    {
      output: "spam",
      input: "Thanks for your subscription to Ringtone UK your mobile will be charged �5/month Please confirm by replying YES or NO. If you reply NO you will not be charged",
      
    },
    {
      output: "ham",
      input: "Yup... Ok i go home look at the timings then i msg �_ again... Xuhui going to learn on 2nd may too but her lesson is at 8am",
      
    },
    {
      output: "ham",
      input: "Oops, I'll let you know when my roommate's done",
      
    },
    {
      output: "ham",
      input: "I see the letter B on my car",
      
    },
    {
      output: "ham",
      input: "Anything lor... U decide...",
      
    },
    {
      output: "ham",
      input: "Hello! How's you and how did saturday go? I was just texting to see if you'd decided to do anything tomo. Not that i'm trying to invite myself or anything!",
      
    },
    {
      output: "ham",
      input: "Pls go ahead with watts. I just wanted to be sure. Do have a great weekend. Abiola",
      
    },
    {
      output: "ham",
      input: "Did I forget to tell you ? I want you , I need you, I crave you ... But most of all ... I love you my sweet Arabian steed ... Mmmmmm ... Yummy",
      
    },
    {
      output: "spam",
      input: "07732584351 - Rodger Burns - MSG = We tried to call you re your reply to our sms for a free nokia mobile + free camcorder. Please call now 08000930705 for delivery tomorrow",
      
    },
    {
      output: "ham",
      input: "WHO ARE YOU SEEING?",
      
    },
    {
      output: "ham",
      input: "Great! I hope you like your man well endowed. I am  &lt;#&gt;  inches...",
      
    },
    {
      output: "ham",
      input: "No calls..messages..missed calls",
      
    },
    {
      output: "ham",
      input: "Didn't you get hep b immunisation in nigeria.",
      
    },
    {
      output: "ham",
      input: "Fair enough, anything going on?",
      
    },
    {
      output: "ham",
      input: "Yeah hopefully, if tyler can't do it I could maybe ask around a bit",
      
    },
    {
      output: "ham",
      input: "U don't know how stubborn I am. I didn't even want to go to the hospital. I kept telling Mark I'm not a weak sucker. Hospitals are for weak suckers.",
      
    },
    {
      output: "ham",
      input: "What you thinked about me. First time you saw me in class.",
      
    },
    {
      output: "ham",
      input: "A gram usually runs like  &lt;#&gt; , a half eighth is smarter though and gets you almost a whole second gram for  &lt;#&gt;",
      
    },
    {
      output: "ham",
      input: "K fyi x has a ride early tomorrow morning but he's crashing at our place tonight",
      
    },
    {
      output: "ham",
      input: "Wow. I never realized that you were so embarassed by your accomodations. I thought you liked it, since i was doing the best i could and you always seemed so happy about \\the cave\\\". I'm sorry I didn't and don't have more to give. I'm sorry i offered. I'm sorry your room was so embarassing.",
      
    },
    {
      output: "spam",
      input: "SMS. ac Sptv: The New Jersey Devils and the Detroit Red Wings play Ice Hockey. Correct or Incorrect? End? Reply END SPTV",
      
    },
    {
      output: "ham",
      input: "Do you know what Mallika Sherawat did yesterday? Find out now @  &lt;URL&gt;",
      
    },
    {
      output: "spam",
      input: "Congrats! 1 year special cinema pass for 2 is yours. call 09061209465 now! C Suprman V, Matrix3, StarWars3, etc all 4 FREE! bx420-ip4-5we. 150pm. Dont miss out!",
      
    },
    {
      output: "ham",
      input: "Sorry, I'll call later in meeting.",
      
    },
    {
      output: "ham",
      input: "Tell where you reached",
      
    },
    {
      output: "ham",
      input: "Yes..gauti and sehwag out of odi series.",
      
    },
    {
      output: "ham",
      input: "Your gonna have to pick up a $1 burger for yourself on your way home. I can't even move. Pain is killing me.",
      
    },
    {
      output: "ham",
      input: "Ha ha ha good joke. Girls are situation seekers.",
      
    },
    {
      output: "ham",
      input: "Its a part of checking IQ",
      
    },
    {
      output: "ham",
      input: "Sorry my roommates took forever, it ok if I come by now?",
      
    },
    {
      output: "ham",
      input: "Ok lar i double check wif da hair dresser already he said wun cut v short. He said will cut until i look nice.",
      
    },
    {
      output: "spam",
      input: "As a valued customer, I am pleased to advise you that following recent review of your Mob No. you are awarded with a �1500 Bonus Prize, call 09066364589",
      
    },
    {
      output: "ham",
      input: "Today is \\song dedicated day..\\\" Which song will u dedicate for me? Send this to all ur valuable frnds but first rply me...",
      
    },
    {
      output: "spam",
      input: "Urgent UR awarded a complimentary trip to EuroDisinc Trav, Aco&Entry41 Or �1000. To claim txt DIS to 87121 18+6*�1.50(moreFrmMob. ShrAcomOrSglSuplt)10, LS1 3AJ",
      
    },
    {
      output: "spam",
      input: "Did you hear about the new \\Divorce Barbie\\\"? It comes with all of Ken's stuff!",
      
    },
    {
      output: "ham",
      input: "I plane to give on this month end.",
      
    },
    {
      output: "ham",
      input: "Wah lucky man... Then can save money... Hee...",
      
    },
    {
      output: "ham",
      input: "Finished class where are you.",
      
    },
    {
      output: "ham",
      input: "HI BABE IM AT HOME NOW WANNA DO SOMETHING? XX",
      
    },
    {
      output: "ham",
      input: "K..k:)where are you?how did you performed?",
      
    },
    {
      output: "ham",
      input: "U can call me now...",
      
    },
    {
      output: "ham",
      input: "I am waiting machan. Call me once you free.",
      
    },
    {
      output: "ham",
      input: "Thats cool. i am a gentleman and will treat you with dignity and respect.",
      
    },
    {
      output: "ham",
      input: "I like you peoples very much:) but am very shy pa.",
      
    },
    {
      output: "ham",
      input: "Does not operate after  &lt;#&gt;  or what",
      
    },
    {
      output: "ham",
      input: "Its not the same here. Still looking for a job. How much do Ta's earn there.",
      
    },
    {
      output: "ham",
      input: "Sorry, I'll call later",
      
    },
    {
      output: "ham",
      input: "K. Did you call me just now ah?",
      
    },
    {
      output: "ham",
      input: "Ok i am on the way to home hi hi",
      
    },
    {
      output: "ham",
      input: "You will be in the place of that man",
      
    },
    {
      output: "ham",
      input: "Yup next stop.",
      
    },
    {
      output: "ham",
      input: "I call you later, don't have network. If urgnt, sms me.",
      
    },
    {
      output: "ham",
      input: "For real when u getting on yo? I only need 2 more tickets and one more jacket and I'm done. I already used all my multis.",
      
    },
    {
      output: "ham",
      input: "Yes I started to send requests to make it but pain came back so I'm back in bed. Double coins at the factory too. I gotta cash in all my nitros.",
      
    },
    {
      output: "ham",
      input: "I'm really not up to it still tonight babe",
      
    },
    {
      output: "ham",
      input: "Ela kano.,il download, come wen ur free..",
      
    },
    {
      output: "ham",
      input: "Yeah do! Don���t stand to close tho- you���ll catch something!",
      
    },
    {
      output: "ham",
      input: "Sorry to be a pain. Is it ok if we meet another night? I spent late afternoon in casualty and that means i haven't done any of y stuff42moro and that includes all my time sheets and that. Sorry.",
      
    },
    {
      output: "ham",
      input: "Smile in Pleasure Smile in Pain Smile when trouble pours like Rain Smile when sum1 Hurts U Smile becoz SOMEONE still Loves to see u Smiling!!",
      
    },
    {
      output: "spam",
      input: "Please call our customer service representative on 0800 169 6031 between 10am-9pm as you have WON a guaranteed �1000 cash or �5000 prize!",
      
    },
    {
      output: "ham",
      input: "Havent planning to buy later. I check already lido only got 530 show in e afternoon. U finish work already?",
      
    },
    {
      output: "spam",
      input: "Your free ringtone is waiting to be collected. Simply text the password \\MIX\\\" to 85069 to verify. Get Usher and Britney. FML",
      
    },
    {
      output: "ham",
      input: "Watching telugu movie..wat abt u?",
      
    },
    {
      output: "ham",
      input: "i see. When we finish we have loads of loans to pay",
      
    },
    {
      output: "ham",
      input: "Hi. Wk been ok - on hols now! Yes on for a bit of a run. Forgot that i have hairdressers appointment at four so need to get home n shower beforehand. Does that cause prob for u?\\\"\nham",
      
    },
    {
      output: "ham",
      input: "Please don't text me anymore. I have nothing else to say.",
      
    },
    {
      output: "ham",
      input: "Okay name ur price as long as its legal! Wen can I pick them up? Y u ave x ams xx",
      
    },
    {
      output: "ham",
      input: "I'm still looking for a car to buy. And have not gone 4the driving test yet.",
      
    },
    {
      output: "ham",
      input: "As per your request 'Melle Melle (Oru Minnaminunginte Nurungu Vettam)' has been set as your callertune for all Callers. Press *9 to copy your friends Callertune",
      
    },
    {
      output: "ham",
      input: "wow. You're right! I didn't mean to do that. I guess once i gave up on boston men and changed my search location to nyc, something changed. Cuz on my signin page it still says boston.",
      
    },
    {
      output: "ham",
      input: "Umma my life and vava umma love you lot dear",
      
    },
    {
      output: "ham",
      input: "Thanks a lot for your wishes on my birthday. Thanks you for making my birthday truly memorable.",
      
    },
    {
      output: "ham",
      input: "Aight, I'll hit you up when I get some cash",
      
    },
    {
      output: "ham",
      input: "How would my ip address test that considering my computer isn't a minecraft server",
      
    },
    {
      output: "ham",
      input: "I know! Grumpy old people. My mom was like you better not be lying. Then again I am always the one to play jokes...",
      
    },
    {
      output: "ham",
      input: "Dont worry. I guess he's busy.",
      
    },
    {
      output: "ham",
      input: "What is the plural of the noun research?",
      
    },
    {
      output: "ham",
      input: "Going for dinner.msg you after.",
      
    },
    {
      output: "ham",
      input: "I'm ok wif it cos i like 2 try new things. But i scared u dun like mah. Cos u said not too loud.",
      
    },
    {
      output: "spam",
      input: "GENT! We are trying to contact you. Last weekends draw shows that you won a �1000 prize GUARANTEED. Call 09064012160. Claim Code K52. Valid 12hrs only. 150ppm",
      
    },
    {
      output: "ham",
      input: "Wa, ur openin sentence very formal... Anyway, i'm fine too, juz tt i'm eatin too much n puttin on weight...Haha... So anythin special happened?",
      
    },
    {
      output: "ham",
      input: "As I entered my cabin my PA said, '' Happy B'day Boss !!''. I felt special. She askd me 4 lunch. After lunch she invited me to her apartment. We went there.",
      
    },
    {
      output: "spam",
      input: "You are a winner U have been specially selected 2 receive �1000 or a 4* holiday (flights inc) speak to a live operator 2 claim 0871277810910p/min (18+)",
      
    },
    {
      output: "ham",
      input: "Goodo! Yes we must speak friday - egg-potato ratio for tortilla needed!",
      
    },
    {
      output: "ham",
      input: "Hmm...my uncle just informed me that he's paying the school directly. So pls buy food.",
      
    },
    {
      output: "spam",
      input: "PRIVATE! Your 2004 Account Statement for 07742676969 shows 786 unredeemed Bonus Points. To claim call 08719180248 Identifier Code: 45239 Expires",
      
    },
    {
      output: "spam",
      input: "URGENT! Your Mobile No. was awarded �2000 Bonus Caller Prize on 5/9/03 This is our final try to contact U! Call from Landline 09064019788 BOX42WR29C, 150PPM",
      
    },
    {
      output: "ham",
      input: "here is my new address -apples&pairs&all that malarky",
      
    },
    {
      output: "spam",
      input: "Todays Voda numbers ending 7548 are selected to receive a $350 award. If you have a match please call 08712300220 quoting claim code 4041 standard rates app",
      
    },
    {
      output: "ham",
      input: "I am going to sao mu today. Will be done only at 12",
      
    },
    {
      output: "ham",
      input: "�� predict wat time �_'ll finish buying?",
      
    },
    {
      output: "ham",
      input: "Good stuff, will do.",
      
    },
    {
      output: "ham",
      input: "Just so that you know,yetunde hasn't sent money yet. I just sent her a text not to bother sending. So its over, you dont have to involve yourself in anything. I shouldn't have imposed anything on you in the first place so for that, i apologise.",
      
    },
    {
      output: "ham",
      input: "Are you there in room.",
      
    },
    {
      output: "ham",
      input: "HEY GIRL. HOW R U? HOPE U R WELL ME AN DEL R BAK! AGAIN LONG TIME NO C! GIVE ME A CALL SUM TIME FROM LUCYxx",
      
    },
    {
      output: "ham",
      input: "K..k:)how much does it cost?",
      
    },
    {
      output: "ham",
      input: "I'm home.",
      
    },
    {
      output: "ham",
      input: "Dear, will call Tmorrow.pls accomodate.",
      
    },
    {
      output: "ham",
      input: "First answer my question.",
      
    },
    {
      output: "spam",
      input: "Sunshine Quiz Wkly Q! Win a top Sony DVD player if u know which country the Algarve is in? Txt ansr to 82277. �1.50 SP:Tyrone",
      
    },
    {
      output: "spam",
      input: "Want 2 get laid tonight? Want real Dogging locations sent direct 2 ur mob? Join the UK's largest Dogging Network bt Txting GRAVEL to 69888! Nt. ec2a. 31p.msg@150p",
      
    },
    {
      output: "ham",
      input: "I only haf msn. It's yijue@hotmail.com",
      
    },
    {
      output: "ham",
      input: "He is there. You call and meet him",
      
    },
    {
      output: "ham",
      input: "No no. I will check all rooms befor activities",
      
    },
    {
      output: "spam",
      input: "You'll not rcv any more msgs from the chat svc. For FREE Hardcore services text GO to: 69988 If u get nothing u must Age Verify with yr network & try again",
      
    },
    {
      output: "ham",
      input: "Got c... I lazy to type... I forgot �_ in lect... I saw a pouch but like not v nice...",
      
    },
    {
      output: "ham",
      input: "K, text me when you're on the way",
      
    },
    {
      output: "ham",
      input: "Sir, Waiting for your mail.",
      
    },
    {
      output: "ham",
      input: "A swt thought: \\Nver get tired of doing little things 4 lovable persons..\\\" Coz..somtimes those little things occupy d biggest part in their Hearts.. Gud ni8",
      
    },
    {
      output: "ham",
      input: "I know you are. Can you pls open the back?",
      
    },
    {
      output: "ham",
      input: "Yes see ya not on the dot",
      
    },
    {
      output: "ham",
      input: "Whats the staff name who is taking class for us?",
      
    },
    {
      output: "spam",
      input: "FreeMsg Why haven't you replied to my text? I'm Randy, sexy, female and live local. Luv to hear from u. Netcollex Ltd 08700621170150p per msg reply Stop to end",
      
    },
    {
      output: "ham",
      input: "Ummma.will call after check in.our life will begin from qatar so pls pray very hard.",
      
    },
    {
      output: "ham",
      input: "K..i deleted my contact that why?",
      
    },
    {
      output: "ham",
      input: "Sindu got job in birla soft ..",
      
    },
    {
      output: "ham",
      input: "The wine is flowing and i'm i have nevering..",
      
    },
    {
      output: "ham",
      input: "Yup i thk cine is better cos no need 2 go down 2 plaza mah.",
      
    },
    {
      output: "ham",
      input: "Ok... Ur typical reply...",
      
    },
    {
      output: "ham",
      input: "As per your request 'Melle Melle (Oru Minnaminunginte Nurungu Vettam)' has been set as your callertune for all Callers. Press *9 to copy your friends Callertune",
      
    },
    {
      output: "ham",
      input: "You are everywhere dirt, on the floor, the windows, even on my shirt. And sometimes when i open my mouth, you are all that comes flowing out. I dream of my world without you, then half my chores are out too. A time of joy for me, lots of tv shows i.ll see. But i guess like all things you just must exist, like rain, hail and mist, and when my time here is done, you and i become one.",
      
    },
    {
      output: "ham",
      input: "Aaooooright are you at work?",
      
    },
    {
      output: "ham",
      input: "I'm leaving my house now...",
      
    },
    {
      output: "ham",
      input: "Hello, my love. What are you doing? Did you get to that interview today? Are you you happy? Are you being a good boy? Do you think of me?Are you missing me ?",
      
    },
    {
      output: "spam",
      input: "Customer service annoncement. You have a New Years delivery waiting for you. Please call 07046744435 now to arrange delivery",
      
    },
    {
      output: "spam",
      input: "You are a winner U have been specially selected 2 receive �1000 cash or a 4* holiday (flights inc) speak to a live operator 2 claim 0871277810810",
      
    },
    {
      output: "ham",
      input: "Keep yourself safe for me because I need you and I miss you already and I envy everyone that see's you in real life",
      
    },
    {
      output: "ham",
      input: "New car and house for my parents.:)i have only new job in hand:)",
      
    },
    {
      output: "ham",
      input: "I'm so in love with you. I'm excited each day i spend with you. You make me so happy.",
      
    },
    {
      output: "spam",
      input: "-PLS STOP bootydelious (32/F) is inviting you to be her friend. Reply YES-434 or NO-434 See her: www.SMS.ac/u/bootydelious STOP? Send STOP FRND to 62468",
      
    },
    {
      output: "spam",
      input: "BangBabes Ur order is on the way. U SHOULD receive a Service Msg 2 download UR content. If U do not, GoTo wap. bangb. tv on UR mobile internet/service menu",
      
    },
    {
      output: "ham",
      input: "I place all ur points on e cultures module already.",
      
    },
    {
      output: "spam",
      input: "URGENT! We are trying to contact you. Last weekends draw shows that you have won a �900 prize GUARANTEED. Call 09061701939. Claim code S89. Valid 12hrs only",
      
    },
    {
      output: "ham",
      input: "Hi frnd, which is best way to avoid missunderstding wit our beloved one's?",
      
    },
    {
      output: "ham",
      input: "Great escape. I fancy the bridge but needs her lager. See you tomo",
      
    },
    {
      output: "ham",
      input: "Yes :)it completely in out of form:)clark also utter waste.",
      
    },
    {
      output: "ham",
      input: "Sir, I need AXIS BANK account no and bank address.",
      
    },
    {
      output: "ham",
      input: "Hmmm.. Thk sure got time to hop ard... Ya, can go 4 free abt... Muz call u to discuss liao...",
      
    },
    {
      output: "ham",
      input: "What time you coming down later?",
      
    },
    {
      output: "ham",
      input: "Bloody hell, cant believe you forgot my surname Mr . Ill give u a clue, its spanish and begins with m...",
      
    },
    {
      output: "ham",
      input: "Well, i'm gonna finish my bath now. Have a good...fine night.",
      
    },
    {
      output: "ham",
      input: "Let me know when you've got the money so carlos can make the call",
      
    },
    {
      output: "ham",
      input: "U still going to the mall?",
      
    },
    {
      output: "ham",
      input: "Turns out my friends are staying for the whole show and won't be back til ~ &lt;#&gt; , so feel free to go ahead and smoke that $ &lt;#&gt;  worth",
      
    },
    {
      output: "ham",
      input: "Text her. If she doesnt reply let me know so i can have her log in",
      
    },
    {
      output: "ham",
      input: "Hi! You just spoke to MANEESHA V. We'd like to know if you were satisfied with the experience. Reply Toll Free with Yes or No.",
      
    },
    {
      output: "ham",
      input: "You lifted my hopes with the offer of money. I am in need. Especially when the end of the month approaches and it hurts my studying. Anyways have a gr8 weekend",
      
    },
    {
      output: "ham",
      input: "Lol no. U can trust me.",
      
    },
    {
      output: "ham",
      input: "ok. I am a gentleman and will treat you with dignity and respect.",
      
    },
    {
      output: "ham",
      input: "He will, you guys close?",
      
    },
    {
      output: "ham",
      input: "Going on nothing great.bye",
      
    },
    {
      output: "ham",
      input: "Hello handsome ! Are you finding that job ? Not being lazy ? Working towards getting back that net for mummy ? Where's my boytoy now ? Does he miss me ?",
      
    },
    {
      output: "ham",
      input: "Haha awesome, be there in a minute",
      
    },
    {
      output: "spam",
      input: "Please call our customer service representative on FREEPHONE 0808 145 4742 between 9am-11pm as you have WON a guaranteed �1000 cash or �5000 prize!",
      
    },
    {
      output: "ham",
      input: "Have you got Xmas radio times. If not i will get it now",
      
    },
    {
      output: "ham",
      input: "I jus reached home. I go bathe first. But my sis using net tell u when she finishes k...",
      
    },
    {
      output: "spam",
      input: "Are you unique enough? Find out from 30th August. www.areyouunique.co.uk",
      
    },
    {
      output: "ham",
      input: "I'm sorry. I've joined the league of people that dont keep in touch. You mean a great deal to me. You have been a friend at all times even at great personal cost. Do have a great week.|",
      
    },
    {
      output: "ham",
      input: "Hi :)finally i completed the course:)",
      
    },
    {
      output: "ham",
      input: "It will stop on itself. I however suggest she stays with someone that will be able to give ors for every stool.",
      
    },
    {
      output: "ham",
      input: "How are you doing? Hope you've settled in for the new school year. Just wishin you a gr8 day",
      
    },
    {
      output: "ham",
      input: "Gud mrng dear hav a nice day",
      
    },
    {
      output: "ham",
      input: "Did u got that persons story",
      
    },
    {
      output: "ham",
      input: "is your hamster dead? Hey so tmr i meet you at 1pm orchard mrt?",
      
    },
    {
      output: "ham",
      input: "Hi its Kate how is your evening? I hope i can see you tomorrow for a bit but i have to bloody babyjontet! Txt back if u can. :) xxx",
      
    },
    {
      output: "ham",
      input: "Found it, ENC  &lt;#&gt; , where you at?",
      
    },
    {
      output: "ham",
      input: "I sent you  &lt;#&gt;  bucks",
      
    },
    {
      output: "ham",
      input: "Hello darlin ive finished college now so txt me when u finish if u can love Kate xxx",
      
    },
    {
      output: "ham",
      input: "Your account has been refilled successfully by INR  &lt;DECIMAL&gt; . Your KeralaCircle prepaid account balance is Rs  &lt;DECIMAL&gt; . Your Transaction ID is KR &lt;#&gt; .",
      
    },
    {
      output: "ham",
      input: "Goodmorning sleeping ga.",
      
    },
    {
      output: "ham",
      input: "U call me alter at 11 ok.",
      
    },
    {
      output: "ham",
      input: "�� say until like dat i dun buy ericsson oso cannot oredi lar...",
      
    },
    {
      output: "ham",
      input: "As I entered my cabin my PA said, '' Happy B'day Boss !!''. I felt special. She askd me 4 lunch. After lunch she invited me to her apartment. We went there.",
      
    },
    {
      output: "ham",
      input: "Aight yo, dats straight dogg",
      
    },
    {
      output: "ham",
      input: "You please give us connection today itself before  &lt;DECIMAL&gt;  or refund the bill",
      
    },
    {
      output: "ham",
      input: "Both :) i shoot big loads so get ready!",
      
    },
    {
      output: "ham",
      input: "What's up bruv, hope you had a great break. Do have a rewarding semester.",
      
    },
    {
      output: "ham",
      input: "Home so we can always chat",
      
    },
    {
      output: "ham",
      input: "K:)k:)good:)study well.",
      
    },
    {
      output: "ham",
      input: "Yup... How �_ noe leh...",
      
    },
    {
      output: "ham",
      input: "Sounds great! Are you home now?",
      
    },
    {
      output: "ham",
      input: "Finally the match heading towards draw as your prediction.",
      
    },
    {
      output: "ham",
      input: "Tired. I haven't slept well the past few nights.",
      
    },
    {
      output: "ham",
      input: "Easy ah?sen got selected means its good..",
      
    },
    {
      output: "ham",
      input: "I have to take exam with march 3",
      
    },
    {
      output: "ham",
      input: "Yeah you should. I think you can use your gt atm now to register. Not sure but if there's anyway i can help let me know. But when you do be sure you are ready.",
      
    },
    {
      output: "ham",
      input: "Ok no prob. Take ur time.",
      
    },
    {
      output: "ham",
      input: "There is os called ubandu which will run without installing in hard disk...you can use that os to copy the important files in system and give it to repair shop..",
      
    },
    {
      output: "ham",
      input: "Sorry, I'll call later",
      
    },
    {
      output: "ham",
      input: "U say leh... Of course nothing happen lar. Not say v romantic jus a bit only lor. I thk e nite scenery not so nice leh.",
      
    },
    {
      output: "spam",
      input: "500 New Mobiles from 2004, MUST GO! Txt: NOKIA to No: 89545 & collect yours today!From ONLY �1 www.4-tc.biz 2optout 087187262701.50gbp/mtmsg18",
      
    },
    {
      output: "ham",
      input: "Would really appreciate if you call me. Just need someone to talk to.",
      
    },
    {
      output: "spam",
      input: "Will u meet ur dream partner soon? Is ur career off 2 a flyng start? 2 find out free, txt HORO followed by ur star sign, e. g. HORO ARIES",
      
    },
    {
      output: "ham",
      input: "Hey company elama po mudyadhu.",
      
    },
    {
      output: "ham",
      input: "Life is more strict than teacher... Bcoz Teacher teaches lesson &amp; then conducts exam, But Life first conducts Exam &amp; then teaches Lessons. Happy morning. . .",
      
    },
    {
      output: "ham",
      input: "Dear good morning now only i am up",
      
    },
    {
      output: "ham",
      input: "For real when u getting on yo? I only need 2 more tickets and one more jacket and I'm done. I already used all my multis.",
      
    },
    {
      output: "ham",
      input: "Yes I started to send requests to make it but pain came back so I'm back in bed. Double coins at the factory too. I gotta cash in all my nitros.",
      
    },
    {
      output: "ham",
      input: "I'm really not up to it still tonight babe",
      
    },
    {
      output: "ham",
      input: "Ela kano.,il download, come wen ur free..",
      
    },
    {
      output: "ham",
      input: "Yeah do! Don���t stand to close tho- you���ll catch something!",
      
    },
    {
      output: "ham",
      input: "Sorry to be a pain. Is it ok if we meet another night? I spent late afternoon in casualty and that means i haven't done any of y stuff42moro and that includes all my time sheets and that. Sorry.",
      
    },
    {
      output: "ham",
      input: "Smile in Pleasure Smile in Pain Smile when trouble pours like Rain Smile when sum1 Hurts U Smile becoz SOMEONE still Loves to see u Smiling!!",
      
    },
    {
      output: "spam",
      input: "Please call our customer service representative on 0800 169 6031 between 10am-9pm as you have WON a guaranteed �1000 cash or �5000 prize!",
      
    },
    {
      output: "ham",
      input: "Havent planning to buy later. I check already lido only got 530 show in e afternoon. U finish work already?",
      
    },
    {
      output: "spam",
      input: "Your free ringtone is waiting to be collected. Simply text the password \\MIX\\\" to 85069 to verify. Get Usher and Britney. FML",
      
    },
    {
      output: "ham",
      input: "Watching telugu movie..wat abt u?",
      
    },
    {
      output: "ham",
      input: "i see. When we finish we have loads of loans to pay",
      
    },
    {
      output: "ham",
      input: "Hi. Wk been ok - on hols now! Yes on for a bit of a run. Forgot that i have hairdressers appointment at four so need to get home n shower beforehand. Does that cause prob for u?\\\"\nham",
      
    },
    {
      output: "ham",
      input: "Please don't text me anymore. I have nothing else to say.",
      
    },
    {
      output: "ham",
      input: "Okay name ur price as long as its legal! Wen can I pick them up? Y u ave x ams xx",
      
    },
    {
      output: "ham",
      input: "I'm still looking for a car to buy. And have not gone 4the driving test yet.",
      
    },
    {
      output: "ham",
      input: "As per your request 'Melle Melle (Oru Minnaminunginte Nurungu Vettam)' has been set as your callertune for all Callers. Press *9 to copy your friends Callertune",
      
    },
    {
      output: "ham",
      input: "wow. You're right! I didn't mean to do that. I guess once i gave up on boston men and changed my search location to nyc, something changed. Cuz on my signin page it still says boston.",
      
    },
    {
      output: "ham",
      input: "Umma my life and vava umma love you lot dear",
      
    },
    {
      output: "ham",
      input: "Thanks a lot for your wishes on my birthday. Thanks you for making my birthday truly memorable.",
      
    },
    {
      output: "ham",
      input: "Aight, I'll hit you up when I get some cash",
      
    },
    {
      output: "ham",
      input: "How would my ip address test that considering my computer isn't a minecraft server",
      
    },
    {
      output: "ham",
      input: "I know! Grumpy old people. My mom was like you better not be lying. Then again I am always the one to play jokes...",
      
    },
    {
      output: "ham",
      input: "Dont worry. I guess he's busy.",
      
    },
    {
      output: "ham",
      input: "What is the plural of the noun research?",
      
    },
    {
      output: "ham",
      input: "Going for dinner.msg you after.",
      
    },
    {
      output: "ham",
      input: "I'm ok wif it cos i like 2 try new things. But i scared u dun like mah. Cos u said not too loud.",
      
    },
    {
      output: "spam",
      input: "GENT! We are trying to contact you. Last weekends draw shows that you won a �1000 prize GUARANTEED. Call 09064012160. Claim Code K52. Valid 12hrs only. 150ppm",
      
    },
    {
      output: "ham",
      input: "Wa, ur openin sentence very formal... Anyway, i'm fine too, juz tt i'm eatin too much n puttin on weight...Haha... So anythin special happened?",
      
    },
    {
      output: "ham",
      input: "As I entered my cabin my PA said, '' Happy B'day Boss !!''. I felt special. She askd me 4 lunch. After lunch she invited me to her apartment. We went there.",
      
    },
    {
      output: "spam",
      input: "You are a winner U have been specially selected 2 receive �1000 or a 4* holiday (flights inc) speak to a live operator 2 claim 0871277810910p/min (18+)",
      
    },
    {
      output: "ham",
      input: "Goodo! Yes we must speak friday - egg-potato ratio for tortilla needed!",
      
    },
    {
      output: "ham",
      input: "Hmm...my uncle just informed me that he's paying the school directly. So pls buy food.",
      
    },
    {
      output: "spam",
      input: "PRIVATE! Your 2004 Account Statement for 07742676969 shows 786 unredeemed Bonus Points. To claim call 08719180248 Identifier Code: 45239 Expires",
      
    },
    {
      output: "spam",
      input: "URGENT! Your Mobile No. was awarded �2000 Bonus Caller Prize on 5/9/03 This is our final try to contact U! Call from Landline 09064019788 BOX42WR29C, 150PPM",
      
    },
    {
      output: "ham",
      input: "here is my new address -apples&pairs&all that malarky",
      
    },
    {
      output: "spam",
      input: "Todays Voda numbers ending 7548 are selected to receive a $350 award. If you have a match please call 08712300220 quoting claim code 4041 standard rates app",
      
    },
    {
      output: "ham",
      input: "I am going to sao mu today. Will be done only at 12",
      
    },
    {
      output: "ham",
      input: "�� predict wat time �_'ll finish buying?",
      
    },
    {
      output: "ham",
      input: "Good stuff, will do.",
      
    },
    {
      output: "ham",
      input: "Just so that you know,yetunde hasn't sent money yet. I just sent her a text not to bother sending. So its over, you dont have to involve yourself in anything. I shouldn't have imposed anything on you in the first place so for that, i apologise.",
      
    },
    {
      output: "ham",
      input: "Are you there in room.",
      
    },
    {
      output: "ham",
      input: "HEY GIRL. HOW R U? HOPE U R WELL ME AN DEL R BAK! AGAIN LONG TIME NO C! GIVE ME A CALL SUM TIME FROM LUCYxx",
      
    },
    {
      output: "ham",
      input: "K..k:)how much does it cost?",
      
    },
    {
      output: "ham",
      input: "I'm home.",
      
    },
    {
      output: "ham",
      input: "Dear, will call Tmorrow.pls accomodate.",
      
    },
    {
      output: "ham",
      input: "First answer my question.",
      
    },
    {
      output: "spam",
      input: "Sunshine Quiz Wkly Q! Win a top Sony DVD player if u know which country the Algarve is in? Txt ansr to 82277. �1.50 SP:Tyrone",
      
    },
    {
      output: "spam",
      input: "Want 2 get laid tonight? Want real Dogging locations sent direct 2 ur mob? Join the UK's largest Dogging Network bt Txting GRAVEL to 69888! Nt. ec2a. 31p.msg@150p",
      
    },
    {
      output: "ham",
      input: "I only haf msn. It's yijue@hotmail.com",
      
    },
    {
      output: "ham",
      input: "He is there. You call and meet him",
      
    },
    {
      output: "ham",
      input: "No no. I will check all rooms befor activities",
      
    },
    {
      output: "spam",
      input: "You'll not rcv any more msgs from the chat svc. For FREE Hardcore services text GO to: 69988 If u get nothing u must Age Verify with yr network & try again",
      
    },
    {
      output: "ham",
      input: "Got c... I lazy to type... I forgot �_ in lect... I saw a pouch but like not v nice...",
      
    },
    {
      output: "ham",
      input: "K, text me when you're on the way",
      
    },
    {
      output: "ham",
      input: "Sir, Waiting for your mail.",
      
    },
    {
      output: "ham",
      input: "A swt thought: \\Nver get tired of doing little things 4 lovable persons..\\\" Coz..somtimes those little things occupy d biggest part in their Hearts.. Gud ni8",
      
    },
    {
      output: "ham",
      input: "I know you are. Can you pls open the back?",
      
    },
    {
      output: "ham",
      input: "Yes see ya not on the dot",
      
    },
    {
      output: "ham",
      input: "Whats the staff name who is taking class for us?",
      
    },
    {
      output: "spam",
      input: "FreeMsg Why haven't you replied to my text? I'm Randy, sexy, female and live local. Luv to hear from u. Netcollex Ltd 08700621170150p per msg reply Stop to end",
      
    },
    {
      output: "ham",
      input: "Ummma.will call after check in.our life will begin from qatar so pls pray very hard.",
      
    },
    {
      output: "ham",
      input: "K..i deleted my contact that why?",
      
    },
    {
      output: "ham",
      input: "Sindu got job in birla soft ..",
      
    },
    {
      output: "ham",
      input: "The wine is flowing and i'm i have nevering..",
      
    },
    {
      output: "ham",
      input: "Yup i thk cine is better cos no need 2 go down 2 plaza mah.",
      
    },
    {
      output: "ham",
      input: "Ok... Ur typical reply...",
      
    },
    {
      output: "ham",
      input: "As per your request 'Melle Melle (Oru Minnaminunginte Nurungu Vettam)' has been set as your callertune for all Callers. Press *9 to copy your friends Callertune",
      
    },
    {
      output: "ham",
      input: "You are everywhere dirt, on the floor, the windows, even on my shirt. And sometimes when i open my mouth, you are all that comes flowing out. I dream of my world without you, then half my chores are out too. A time of joy for me, lots of tv shows i.ll see. But i guess like all things you just must exist, like rain, hail and mist, and when my time here is done, you and i become one.",
      
    },
    {
      output: "ham",
      input: "Aaooooright are you at work?",
      
    },
    
  ]
, { iterations:200,
    log:true,
    logPeriod:20,
    learningRate: 0.2
});

for(var i = 0; i < 50; i++)
{
console.log(net.run(data[i].input)+' actual ans is '+ data[i].output);
}
fs.writeFileSync('trained-net.js', `export default ${ net.toFunction().toString() };`);

  

 

    

