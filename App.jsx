import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

import indy from 'indy-sdk-react-native'
import util from './utils/util'

export default function App() {

  const id_cred_offer = {"schema_id":"Th7MpTaRZVRYnPiabds81Y:2:User_Info:1.0","cred_def_id":"Th7MpTaRZVRYnPiabds81Y:3:CL:175:TAG1","key_correctness_proof":{"c":"100469407319667493055821638062496773065291755102575740112689125438783229945278","xz_cap":"416813947661072569468063334291349342665524033987243124428361910563101529782434073746074141234249671263522529882653920887793492524481008506467133244994840005206895178014392375485260584696615192155974020852552505987724087181939373562837515039141555654923678702666107342507251305954854538864409215256732205559862097440264462276199498157342827217653705970460601479984486067459533097126327803672998322875788777783889042575445098273625096550079176646464394142579572893991429692582342047749401141624185154535018755559383944457466188640863029580157521037845242706769200523210045087424200958011696040670656079694921004041754005442209087815471097537358021968583938359103021248206473582845058291297657556","xr_cap":[["name","1067459410028444128805048629940111482101175754793472996223422516171598318990883794015716434278963912011154906945097947832680909311753727087546221929486053043479089168923102340734681141894913860587253195726492590201711024101981972410959151296713231668311323720637178441344149932353195231038578542111684985061939129540424634071846228099416204250733506358801138284591838011994916003346171428103224864144936489594451187433579988756995246358179594529910155274438666744859124996620923081071599070494379597326348915936573541803631156678668358869123692320763415420411799678774973333763483622015766023835859877488868193309386481287552895830865802388227840131002115685733982712649549412029165933450365107"],["company","1736059954935484270061665579419154308338217391121934375115407049882510019686248779536705699428515871638904714355168095903099740192596277221097424536148875579395892118439344444954245716300144755155688154849371424423195059794485212519512032731506028718643876002618658639035649211781737770591349878745832344860707722567404455113430965317604746076521702188731258917324214493166540508424709891795020908617769332156222579879397809389895506222838910028669621678708022407077273058918639443864904116940177852202310931536398803157793417657973236912249535435428277005689401597845667597882409276284478181258066921371590927435348979683600845819251120778651204665926273737612785721198939026833093273910652818"],["master_secret","899453492987466788835883626811444848939890126181087735326178077634813373787487007311111915899270214029040251286027840180866220359350415768965611428941896885117430260747347855267012459095869850772956369154957486988408344929925351144726892893910139257845097881853634113698967962550952961075413451892312368292935729391825812938575336330210368269179726430974682831408589375504209325583385725505204496552557430922348662721161177620878104230031811732646068277684527578693970781543872339145417897279862222875616296618912090663601568363578444973009596664581462398140486546858316141974315751522673950439985186448736165264497995061190633242522204119833250182887337529524782396951740625640528663410217034"]]},"nonce":"317385058443487338168223"}
  const cred = {"schema_id":"Th7MpTaRZVRYnPiabds81Y:2:User_Info:1.0","cred_def_id":"Th7MpTaRZVRYnPiabds81Y:3:CL:175:TAG1","rev_reg_id":null,"values":{"name":{"raw":"Lego2","encoded":"1247393190860383521747762"},"company":{"raw":"CuteDogs2","encoded":"14547266653015671529141657519377553026134834"}},"signature":{"p_credential":{"m_2":"103736524246210402943973225530625635226701778512655689319910244243496387960147","a":"7082574027538397462477368385907929351546285576378777411261460379146487065648798402658364208390496661818365961331335665100870565751095623963785947477623201430541248598131127523621577965952325406534475618941960809894476629114374802414171682792888307398275397923517754669922427451201044949914096231978041374618558261413560733264706854630093355050132729871721027219790749537531615546090712785078358277951513911523526694701643452939910655810800393733991420425392904461191668200260413635817118180407786570293717153289487298470522572705548575476615893875393775297060553267895396445620349047170987533584671877864266523733808","e":"259344723055062059907025491480697571938277889515152306249728583105665800713306759149981690559193987143012367913206299323899696942213235956742930163518324269521150721345734097742133","v":"8215000942112306356746408410215586427261240384267800774017627296938064020694268684923432518341332202671864195321019042878329212350773302696992924082418101888430669821573115064936016344011744312310005011381153138890647252346883116369863451133744100146678292589891402552712037757264091544249210596529025786778082535855462708842710696978500453899661075219452187240493190812240391322535643946720723070425331388134120640206779538764366992483811979564571377271796738426755834376367631550214841464626319029649450477717371539641551560882184658730628067256710671418200094739274413132874988039955232643086962968011856916078675255760080254391006235149442023673962420035350592372348584438942114677943356026976801825098238255262836606413431658052981434953378451558192389311859979809807318306613053151667010201930748674244044992933794"},"r_credential":null},"signature_correctness_proof":{"se":"15126435496339921527817727413731679264887373593700336577149199679117436493585669525237959265273451352612934118129863593431572836119750448363830595558054969255374876317879747761228272297079019311591295153831314253991275553185540510620441798306973708385315601697253530476906130238105638390127031908428427147568871138467948216277983778683058716416665384195546933317860180355869622535203626394106800501314771951414864279241410592617888521797938321390963485409446459745111277700706734292611271329616946274799169245203023742573544357143474392589872340574696869573054073890581398589668897016709064467077567386481380710356830","c":"12676904359957206049754246097581085479322388883091334295148974164264468015916"},"rev_reg":null,"witness":null}
  const login_proof_request = {
    "nonce": "39097670470247808348623",
    "name": "login",
    "version": "0.1",
    "requested_attributes": {
      "attr1_referent": {
        "name": "name"
      },
      "attr2_referent": {
        "name": "company",
        "restrictions": [
          {
            "cred_def_id": "Th7MpTaRZVRYnPiabds81Y:3:CL:175:TAG1"
          }
        ]
      }
    }
  };

  const [walletHandle, setWalletHandle] = useState(null);
  const [poolHandle, setPoolHandle] = useState(null);
  const [did, setDid] = useState('7YXy1UJuFAmHUvxtJCAaCT');

  const [credReqId, setCredReqId] = useState(null);
  const [credReqMetadata, setCredReqmetadata] = useState(null);
  const [credDef, setCredDef] = useState(null);

  const createWallet = async function () {
    console.log('createWallet onPress')
    const result = await indy.createWallet({ id: 'wallet-123' }, { key: 'key' })
    console.log('result', result)
  }
  
  const openWallet = async function () {
    console.log('openWallet onPress')
    const result = await indy.openWallet({ id: 'wallet-123' }, { key: 'key' })
    setWalletHandle(result)
    console.log('result', result)
  }
  
  const closeWallet = async function () {
    console.log('closeWallet onPress')
    const result = await indy.closeWallet(walletHandle)
    console.log('result', result)
  }
  
  const deleteWallet = async function () {
    console.log('deleteWallet onPress')
    const result = await indy.deleteWallet({ id: 'wallet-123' }, { key: 'key' })
    console.log('result', result)
  }

  const getPoolGenesisTxnPath = async function () {
    const genesis = await util.getPoolGenesisTxnPath('genesis');
    console.log('genesis ')
    console.log(genesis)
  }

  const connectPool = async function () {
    const poolName = 'network';
    const poolGenesisTxnPath = await util.getPoolGenesisTxnPath(poolName);
    const poolConfig = {
      'genesis_txn': poolGenesisTxnPath
    }

    await indy.setProtocolVersion(2);
    indy.createPoolLedgerConfig(poolName, poolConfig)
      .then(res => console.log(JSON.stringify(res)))
      .catch(err => console.log(JSON.stringify(err)))

    const pool_handle = await indy.openPoolLedger(poolName);
    setPoolHandle(pool_handle);
  }

  const createDID = async function () {
    const [did, verkey] = await indy.createAndStoreMyDid(walletHandle, {})
    setDid(did);
    console.log(did)
    console.log(verkey)
  }

  const createMasterSecret = async function () {
    const secretName = 'link_secret'
    const linkSecretId = await indy.proverCreateMasterSecret(walletHandle, secretName)

    console.log(linkSecretId)
  }

  const CreateCredentialReq = async function () {
    const credDefd = id_cred_offer.cred_def_id;
    const get_cred_def_request = await indy.buildGetCredDefRequest(did, credDefd);
    const get_cred_def_response = await indy.submitRequest(poolHandle, get_cred_def_request);
    const [idCredDefId, idCredDef] = await indy.parseGetCredDefResponse(get_cred_def_response);

    const [credReqJson, credReqMetadataJson] = 
       await indy.proverCreateCredentialReq(walletHandle, did, id_cred_offer, idCredDef, 'link_secret');

    setCredReqId(idCredDefId);
    setCredReqmetadata(credReqMetadataJson);
    setCredDef(idCredDef);

    // console.log(JSON.stringify(get_cred_def_response))
    // console.log(idCredDefId)
    // console.log(JSON.stringify(idCredDef))
    console.log('metadata');
    console.log(id_cred_offer.nonce);
    console.log(JSON.stringify(credReqJson));
  }

  const getVC = async function () {
    const result = await indy.proverStoreCredential(walletHandle, null, credReqMetadata, cred, credDef);
    console.log('발급');
    console.log(JSON.stringify(result))
  }

  const _proverGetCredential = async function () {
    const result = await indy.proverGetCredential(walletHandle, '8923499a-449b-452c-9056-b2f9a1d8f09d');
    console.log(JSON.stringify(result));
  }

  const vpTest = async function () {
    const proof_request = login_proof_request

    const proverCredSearchHandle = await indy.proverSearchCredentialsForProofReq(walletHandle, proof_request);
    const temp_attr1 = await indy.proverFetchCredentialsForProofReq(proverCredSearchHandle, 'attr1_referent', 10);
    const temp_attr2 = await indy.proverFetchCredentialsForProofReq(proverCredSearchHandle, 'attr2_referent', 10);

    const cred_for_attr1 = temp_attr1[0]['cred_info']
    const cred_for_attr2 = temp_attr2[0]['cred_info']

    const creds_for_login_proof = {
      // [cred_for_attr1['referent']]: cred_for_attr1,
      [cred_for_attr2['referent']]: cred_for_attr2,
    }

    console.log(JSON.stringify(temp_attr2));

    await indy.proverCloseCredentialsSearchForProofReq(proverCredSearchHandle);

    let schemas = {};
    let credDefs = {};
    let revStates = {};

    for(const key in creds_for_login_proof) {

      console.log('schema id');
      
      const getSchemaRequest = await indy.buildGetSchemaRequest(did, creds_for_login_proof[key]['schema_id'])
      const getSchemaResponse = await indy.submitRequest(poolHandle, getSchemaRequest); 
      const [receivedSchemaId, receivedschema] = await indy.parseGetSchemaResponse(getSchemaResponse);
      
      const request = await indy.buildGetCredDefRequest(did, credReqId);
      const response = await indy.submitRequest(poolHandle, request);
      const [receivedCredDefId, receivedCredDef] = await indy.parseGetCredDefResponse(response);
      
      schemas = {
        ...schemas,
        [receivedSchemaId]: receivedschema
      }
      credDefs = {
        ...credDefs,
        [receivedCredDefId]: receivedCredDef
      }


      // console.log(receivedSchemaId)
      // console.log(receivedCredDefId)
    }

    const loginRequestedCreds = {
      self_attested_attributes: {
        attr1_referent: 'testattr1'
      },
      requested_attributes: {
        attr2_referent: {
          // cred_id: cred_for_attr2['referent'],
          cred_id: cred_for_attr2['referent'],
          revealed: true
        }
      },
      requested_predicates: {
        // predicate1_referent: {
        //   cred_id: cred_for_predicate1['referent']
        // }
      }
    }

    const loginProof = 
      await indy.proverCreateProof (
        walletHandle, 
        login_proof_request, 
        loginRequestedCreds,
        'link_secret',
        schemas,
        credDefs,
        revStates
      )

    console.log(JSON.stringify(loginProof));
    // console.log('+------login_proof_request-----------+')
    // console.log(JSON.stringify(login_proof_request));
    // console.log('+---------loginRequestedCreds--------+')
    // console.log(JSON.stringify(loginRequestedCreds));
    // console.log('+--------schemas---------+')
    // console.log(JSON.stringify(schemas));
    // console.log('+--------credDefs---------+')
    // console.log(JSON.stringify(credDefs));
    // console.log('+-------revStates----------+')
    // console.log(JSON.stringify(revStates));
  }

  const listMyDidsWithMeta = async function () {
    const didlist = await indy.listMyDidsWithMeta(walletHandle);

    console.log(didlist);
  }
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title='CREATE WALLET' onPress={createWallet} />
      <Button title='OPEN WALLET' onPress={openWallet} />
      <Button title='CLOSE WALLET' onPress={closeWallet} />
      <Button title='DELETE WALLET' onPress={deleteWallet} />
      <Button title='GET POOL GENESIS TXN PATH' onPress={getPoolGenesisTxnPath} />
      <Button title='CONNECT POOL' onPress={connectPool} />
      <Button title='CREATE DID' onPress={createDID} />
      <Button title='CREATE MASTER SECRET' onPress={createMasterSecret} />
      <Button title='CreateCredentialReq' onPress={CreateCredentialReq} />
      <Button title='VC 발급' onPress={getVC} />
      <Button title='proverGetCredential' onPress={_proverGetCredential} />
      <Button title='VP 테스트' onPress={vpTest} />
      <Button title='mydidlist' onPress={listMyDidsWithMeta} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
