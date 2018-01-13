
import { HesapmatikItem } from './hesapmatik.model';

export const HESAPMATIKLER: HesapmatikItem[] = [

    {
        id:1,
        hesap: 'Kredi Kartı Alacağının Hesabı',
        aciklama: '...',
        key: 'kkarti'
    },{
        id:1,
        hesap: 'Munzam zararın 12 ayrı veriye göre hesabı',
        aciklama: '...',
        key: 'munzam'
    },{
        id:1,
        hesap: 'Mahkeme Masrafı',
        aciklama: '(Yasal faiz % ile hesaplanması)',
        key: 'mahkeme'
    },{
        id:1,
        hesap: 'Ticari anapara alacağı',
        aciklama: '(Ticari -avans-  faiz % ile hesaplanması)',
        key: 'ticari'
    },{
        id:1,
        hesap: 'Adi anapara alacağı',
        aciklama: '(Yasal faiz % ile hesaplanması)',
        key: 'yasal'
    },{
        id:1,
        hesap: 'BANKA TİCARİ KREDİ TAKİP FAİZİ; www.tcmb.gov.tr>veriler>İstatistiki Veriler',
        aciklama: '>Faiz İstatistikleri>"Bankalarca açılan ticari kredilere uygulanan ağırlıklı ortalama faiz oranları" ile',
        key: 'ticaribankalar'
    },{
        id:1,
        hesap: 'Amme faiz % ile',
        aciklama: '(Kamu, SSK, Bağ-Kur, Sözleşme Alacağı)',
        key: 'amme3kamu'
    },{
        id:1,
        hesap: 'Kamulaştırma ve Kamulaştırmasız El Atma Tazm. Yasal ve Amme faizi hesaplanması',
        aciklama: '(Kamulaştırmasız el atma tazm. İçin de,  2942/G-m. 6, 6111/m.2 ve Y. 12. HD. 26.10.2011 T.  E: 5698, K: 20397 içtihat değişikliği ile, kesinleşmeye kadar yasal, 26.10.2011 tarihinden sonra  kesinleşme şartı/tarihinden sonra  amme faizi ile)',
        key: 'kamulastirmayasalamme'
    },{
        id:1,
        hesap: 'Ecrimisil alacağı',
        aciklama: '(dönemsel alacağın, her dönem için yasal faizle hesaplanması)',
        key: 'ecrimisil'
    },{
        id:1,
        hesap: 'Kamulaştırmasız el atma tazminatı alacağı yasal faizle hesabı',
        aciklama: '(Kamulaştırmasız el atma tazm. İçin de,  2942/G-m. 6, 6111/m.2 ve Y. 12. HD. 26.10.2011 T.  E: 5698, K: 20397 içtihat değişikliği ile, kesinleşmeye kadar yasal, 26.10.2011 tarihinden sonra  kesinleşme şartı/tarihinden sonra  amme faizi ile)',
        key: 'kamulastirmasizyasal'
    },{
        id:1,
        hesap: 'İşçi alacakları',
        aciklama: '(Bankalar azami mevduat faizi ve yasal faizle hesaplanması)',
        key: 'iscibankalar'
    },{
        id:1,
        hesap: 'Toplu sözleşme alacağı',
        aciklama: '(KamuBank azami işletme kredi faizi ile hesaplanması)',
        key: 'topluis3kamu'
    },{
        id:1,
        hesap: 'TL Kambiyo, Bankacılık vs. alacağı',
        aciklama: '(ticari faizle hesaplanması)',
        key: 'bankacilikticari'
    },{
        id:1,
        hesap: 'USD>TL kambiyo, bankacılık vs. alacağı',
        aciklama: '(vade günü kurdan ticari faizle hesaplanması)',
        key: 'usdticari'
    },{
        id:1,
        hesap: 'USD kambiyo, bankacılık vs. alacağın ödeme günü kurdan',
        aciklama: '(3KamuBank faizi ile hesaplanması)',
        key: 'usd3kamu'
    },{
        id:1,
        hesap: 'EURO>TL kambiyo, bankacılık vs. alacağın vade günü kurdan',
        aciklama: '(ticari faizle hesaplanmas)',
        key: 'euroticari'
    }, {
        id:1,
        hesap: 'EURO>TL kambiyo, bankacılık vs. alacağın vade günü kurdan ',
        aciklama: '(ticari faizle hesaplanmas)',
        key: 'euroticari'
    }, {
        id:1,
        hesap: 'EURO kambiyo, bankacılık vs. alacağın ödeme günü kurdan ',
        aciklama: '(3KamuBank faiziyle hesaplanması)',
        key: 'euro3kamu'
    }, {
        id:1,
        hesap: 'DEM>EURO kambiyo, bankacılık vs. alacağın ödeme günü kurdan',
        aciklama: '(3KamuBank faiziyle hesaplanması)',
        key: 'demeuro3kamu'
    }, {
        id:1,
        hesap: 'Sabit/Değişken TL Temerrüt faiz oranı ile faiz alacak hesabı ..>>',
        aciklama: '',
        key: 'sabittl'
    }, {
        id:1,
        hesap: 'Sabit/Değişken USD Temerrüt faiz oranı ile faiz alacak hesabı...>>',
        aciklama: '',
        key: 'sabitusd'
    }, {
        id:1,
        hesap: 'Sabit/Değişken EURO Temerrüt aiz oranı ile faiz alacak hesabı..>>',
        aciklama: '',
        key: 'sabiteuro'
    }, {
        id:1,
        hesap: 'Sabit faiz % ile bankacılık alacaklarının hesabı',
        aciklama: '',
        key: 'sabitbankacilik'
    }, {
        id:1,
        hesap: 'Sabit faiz % ile Sözleşme alacağının hesabı',
        aciklama: '',
        key: 'sabitsozlesme'
    }, {
        id:1,
        hesap: 'Dava ve İcra İflas Mdr.\'de;  Harç, Damga Vergisi, Nispi Vekalet Ücreti hesabı',
        aciklama: '(yıl seçilerek)',
        key: 'davaicramasraflari'
    }, {
        id:1,
        hesap: 'Yediemin ücreti hesabı',
        aciklama: '(yıl ve mal seçilerek)',
        key: 'yeddiemin'
    }, {
        id:1,
        hesap: 'Kira veya Nafaka TL. alacağı ',
        aciklama: '(yasal faizle, ödemeli ve ödemesiz hesaplanması)',
        key: 'kiranafaka'
    }, {
        id:1,
        hesap: 'Kira TL. alacağı',
        aciklama: '(ticari faizle ödemeli ve ödemesiz hesaplanması)',
        key: 'kkarti'
    }, {
        id:1,
        hesap: 'Kira USD>TL  vade günü kurdan',
        aciklama: '(ticari faizle alacağın hesaplanması)',
        key: 'kkarti'
    }, {
        id:1,
        hesap: 'Kira EURO>TL alacağı vade günü kurdan',
        aciklama: '(ticari faizle ödemeli/siz hesaplanması)',
        key: 'kkarti'
    }, {
        id:1,
        hesap: 'Kira EURO alacağı, ödeme günü kurdan',
        aciklama: '(3KamuBank faizi ile ödemeli/siz hesabı)',
        key: 'kkarti'
    }, {
        id:1,
        hesap: 'Kira sabit TL faiz % ile',
        aciklama: '(ödemeli/siz alacak hesabı)',
        key: 'kkarti'
    }, {
        id:1,
        hesap: 'Kira sabit USD faiz % ile Fiili ödeme kurdan',
        aciklama: '(ödemeli/siz faiz alacak hesabı, TBK/m.100)',
        key: 'kkarti'
    }, {
        id:1,
        hesap: 'Kira sabit EURO faiz % ile fiili ödeme kurdan',
        aciklama: '(ödemeli/siz faiz alacak hesabı, TBK/m.100)',
        key: 'kkarti'
    }, {
        id:1,
        hesap: 'TCMB USD azami faiz % ile dönem sonu kurdan hesabı',
        aciklama: '(YHGK. E:06/12-594, K:06/434, T:21.9.06 göre geçersiz oranla)',
        key: 'kkarti'
    }, {
        id:1,
        hesap: 'TCMB EURO azami faiz % ile dönem sonu kurdan hesabı',
        aciklama: '(YHGK. E:06/12-594, K:06/434, T:21.9.06 göre geçersiz oranla)',
        key: 'kkarti'
    }, {
        id:1,
        hesap: 'TCMB azami TL faiz % ile, işçi alacağı hesabı',
        aciklama: '(YHGK. E:06/12-594, K:06/434, T:21.9.06 göre geçersiz oranla)',
        key: 'kkarti'
    }, {
        id:1,
        hesap: 'İŞÇİ AL. FAİZ HESABI: www.tcmb.gov.tr>Veriler>İstatistiki Veriler',
        aciklama: '>Faiz İstatistikleri> -Bankalarca Açılan Mevduatlara Uygulanan Ağırlıklı Ortalama Faiz Oranları- ile',
        key: 'kkarti'
    }
  ];