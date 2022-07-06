function Hero(){
    return(
    <div className="max-w-4xl mx-auto mt-16 flex">
        <img className="rounded-lg h-96 w-96" src="/diyetisyen-image.jpg" alt="BigCo Inc. logo"/>
        <div className="flex-col">
            <h1 className="ml-8 font-medium text-2xl font-Roboto">
                Meltem Kurttepe kimdir?
            </h1>
            <p className="ml-8 mt-4 font-Roboto">
                2014 yılında beslenme ve diyet mesleğine gönül veren Seda Sağbaş, lise öğrenimini Adana Ticaret Odası Anadolu Lisesi’nde, üniversite eğitimini ise İstanbul Bilim Üniversitesi’nde Beslenme ve Diyetetik bölümünden mezun olarak tamamlamıştır.

                Arkasında binlerce mutlu danışan bırakan Sağbaş, bu noktaya gelmesini danışanlarını kendine bağımlı hale getirmeden, en hızlı ve sağlıklı bir biçimde istedikleri görüntüye ulaşmasına ve her danışanı için aynı özveriyi göstermesine borçlu olduğunu dile getiriyor.
            </p>
        </div>    
    </div>
    )
}

export default Hero