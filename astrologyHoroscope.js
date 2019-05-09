/*तुला
वृषभ
वृश्चिक
मिथुन राशि
धनुराशि
कैंसर
मकर राशि
सिंह
कन्या
कुंभ राशि
मीन राशि
मेष राशि*/

function horoscope()
{
	 var finalsubmit = true;

	 var rasiname = document.getElementById("name").value;

        if(rasiname=='c'||'l'||'a')
       {
            alert("मेष is your rasi");  
            return true;
        }
        else
        {
            return false;
        }

        
       return finalsubmit;
}