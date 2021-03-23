giTo conclude the chapter, we’ll look at a problem that calls for regular expres-
sions. Imagine we are writing a program to automatically collect information
about our enemies from the Internet. (We will not actually write that program
here, just the part that reads the configuration file. Sorry.) The configuration
file looks like this:

Warning: Content from Eloquent JavaScriptBook p(160)

function parseINI(string){
  //Start with an object to hold the top-level fields
  let result = {};
  let section = resul;
  string.split(/\r?\n/).forEach(line=>{
    let match;
    if(match == line.match(/^(\w+)=(.*)$/)){
      section[match[1]] = match[2];
    }else if(match = line.match(/^\[(.*)\]$/)){
      section = result[match[1]] = {};
    }else if( !/^\s*(;.*)?$/.test(line)){
      throw new Error("Line '"+line+"'is not valid .")
    }
  })

  return result;
}


//challenging create a Ris parser

AB  - BACKGROUND: A diagnosis of ectopic pregnancy (EP) is primarily achieved using
      transvaginal ultrasonography (TVS). Pregnancy of unknown location (PUL) is the term
      used to categorize a pregnancy in a woman with a positive pregnancy test when no
      pregnancy has been visualized using TVS. This review appraises current tools for the
      diagnosis of EP, describes the diagnostic criteria for non-tubal EP and reviews the
      literature on the clinical management of PUL. METHODS: We performed a targeted
      search using the PubMed database. All articles published in the English language
      from January 1984 to March 2013 were screened for eligibility. RESULTS: Using TVS to
      diagnose EP is highly sensitive (87-99%) and specific (94-99.9%). Variations exist
      in the criteria used for ultrasound diagnosis. Studies report that between 5 and 42%
      of women seen for ultrasound assessment with a positive pregnancy test have a PUL.
      For PUL, measurements of serum human chorionic gonadotrophin (hCG) and progesterone
      are used to predict pregnancy viability and therefore give an indication of the risk
      of an EP. Only 6-20% of PUL are subsequently diagnosed with EP. Non-tubal EPs are
      relatively uncommon, difficult to diagnose and result in disproportionate morbidity
      and mortality. CONCLUSIONS: Access to expertise and equipment for high-quality TVS
      means the majority of women with EP in developed countries can be diagnosed rapidly
      and accurately. Identifying PUL, which are low risk and therefore requiring less
      follow-up, finding better serum markers for EP and safely identifying women who do
      not require intervention for EP are the current diagnostic challenges.


#Sprint2 code (RIS)


abs.match(/(.*)\s+-\s+(.*\n+)*/g)[0].split(/(.*)\s+-\s+/)
ris.split(/(.*\n)\n/)[14].match(/([^]*)\s+-\s+(.*\n+)*/g)[0].split(/(.*\s+)-\s+/)

ris.split(/([^]*?\n)\n/) //code to split the whole content starting from PMID and ending on SO ,
/*
The split happens when the regexp find the "" interval between the starting(PMID) and ending(SO) of each line (I'm gonna conside each line)
ris2.split(/([^]*?\n)\n/).filter(items =>items != '')
*/
ris2.split(/([^]*?\n)\n/).filter(items =>items != '') //this code will remove the whole "" empty spaces between each line
//now time to splite each line by (props and value)


ris2.split(/([^]*?\n)\n/).filter(items =>items != '').forEach((line)=>{

    line.match(/([\w-\s]*?)-(\s*.*\n+)*/g)[0].split(/(.*\s+)-\s+/).forEach(line=>console.log(line));

})


#Sprint2 code (RIS)









var ris = `PMID- 22510618
OWN - NLM
STAT- MEDLINE
DCOM- 20120925
LR  - 20120418
IS  - 1532-5520 (Electronic)
IS  - 0009-9201 (Linking)
VI  - 55
IP  - 2
DP  - 2012 Jun
TI  - Ectopic pregnancy: History, incidence, epidemiology, and risk factors.
PG  - 376-86
LID - 10.1097/GRF.0b013e3182516d7b [doi]
AB  - Ectopic pregnancy is directly related to tubal infection, and so prevention of
      chlamydia and gonorrhea must be the watchword to lower its risk and incidence. With
      accurate determination of very low human chorionic gonadotropin concentrations and
      sonography, >85% of women are diagnosed before tubal rupture, which has led to
      medical therapy and laparoscopic surgery with tubal preservation and the potential
      for future fertility. Today, early intervention saves lives and reduces morbidity,
      but ectopic pregnancy still accounts for 4% to 10% of pregnancy-related deaths and
      leads to a high incidence of ectopic site gestations in subsequent pregnancies.
FAU - Marion, Laura L
AU  - Marion LL
AD  - Department of Obstetrics and Gynecology, University of Mississippi School of
      Medicine, Jackson, Mississippi 39216, USA.
FAU - Meeks, George Rodney
AU  - Meeks GR
LA  - eng
PT  - Historical Article
PT  - Journal Article
PT  - Review
PL  - United States
TA  - Clin Obstet Gynecol
JT  - Clinical obstetrics and gynecology
JID - 0070014
RN  - 0 (Chorionic Gonadotropin)
SB  - IM
MH  - Chorionic Gonadotropin/blood
MH  - Early Diagnosis
MH  - Female
MH  - History, 16th Century
MH  - History, 17th Century
MH  - History, 18th Century
MH  - History, 19th Century
MH  - History, 20th Century
MH  - History, Ancient
MH  - Humans
MH  - Incidence
MH  - Pregnancy
MH  - Pregnancy, Ectopic/*diagnosis/epidemiology/history/*therapy
MH  - Risk Factors
MH  - Rupture, Spontaneous/prevention & control
EDAT- 2012/04/19 06:00
MHDA- 2012/09/26 06:00
CRDT- 2012/04/19 06:00
PHST- 2012/04/19 06:00 [entrez]
PHST- 2012/04/19 06:00 [pubmed]
PHST- 2012/09/26 06:00 [medline]
AID - 00003081-201206000-00003 [pii]
AID - 10.1097/GRF.0b013e3182516d7b [doi]
PST - ppublish
SO  - Clin Obstet Gynecol. 2012 Jun;55(2):376-86. doi: 10.1097/GRF.0b013e3182516d7b.
`;
ris.match(/(\w+\s*?)-\s+(.*)/g)
ris.match(/((\w*\s*?)-(\s*[^]*))\n*/g)[0].split(/\n+/g)
ris.split(/\r?\n/).forEach( line  =>{
    console.log(line.match(/^(\w+\s+?)-\s+?(.*|[^])/));
        })

ris.split(/\r?\n/).forEach( line  =>{
    console.log(line.match(/^(\w+\s*?)-\s+?(.*|[^])/));
        })
function addJson(){
    var main  = none.match(/(\w+)\s*?-\s+?(.*)/),prop=main[1],value = main.input.replace(/(\w+\s+)-/,'');
    json = {prop,value}
    console.log(prop,value,main);
}


#later tryout

let arr = [];
    string.split(/\r?\n/).forEach((line) => {
        if (!line.match(/^(\w+\s+?)-\s+?(.*)/)) {
            arr[arr.length - 1] = `${arr[arr.length - 1]} ${line}`;
        } else {
            arr.push(line);
        }
    });
#later tryout





fetch data from github api

var obj = {
   link: 'https://api.producthunt.com/v1/posts',
   object: {
     method: 'GET',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
       'Authorization': 'Bearer ' + this.state.clientToken,
       'Host': 'api.producthunt.com'
     }
   }
 }
 fetch(api.posts.link, obj)
   .then((response) => response.json())
   .then((responseData) => {
     console.log(responseData);
   })
   .done();
},


  const token = "ae5cbc5ca22aab0d71eec2b8df956fcd3b73666c";



fetch('URL_GOES_HERE', {
   method: 'post',
   headers: new Headers({
     'Authorization': 'Basic '+btoa('username:password'),
     'Content-Type': 'application/x-www-form-urlencoded'
   }),
   body: 'A=1&B=2'
 });
