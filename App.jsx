import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios';

import indy from 'indy-sdk-react-native'
import util from './utils/util'

export default function App() {

  // 1. 인증 서버에서 제공 받음 VC 요청서
  const _id_cred_offer = {"schema_id":"Th7MpTaRZVRYnPiabds81Y:2:User_Info:1.0","cred_def_id":"Th7MpTaRZVRYnPiabds81Y:3:CL:23:TAG1","key_correctness_proof":{"c":"102700205875525902992756424274817744954352289908908972965864552799559114357556","xz_cap":"1791797742851421822705416301040107564902479532436692581863824149577753505833672330507453955022367165212610123857329383266207987948929576601453583368372899147271920919715152427729982662001299092437950626887519230856018760327093985171652867538801117865202121506397569012513343614855824865261532761661254291806582476657072074561560281745092612344753475764858051846273478794995511812743373076169711655690114296459580990070705980707498337101510765862347071076715858516524898930404673605395071012124146273052350696495930383705295866373535508629404877804038393602208946279871208543018137310770006596972637584746225196846337091992092490873593446913244316447218582232871411606246798852510822664144712452","xr_cap":[["did","766352337394521605598413819003797744967500527135843947144240595229006912475608646901719694144760056153990078932743768516726146441727729970813923568745228642934141071735290757586523830212488203403400068217066836823873300605333034857918910705353973449787979374368149174913609179834164937443781475083667979531007857948141109740107167615831097071200558533783308792725085374723355832151462561819948693609376196311693886091851473560726126117447884055116134374142529468157262896140436337624751861739281777127532067123813309512381053656108076855158916145716845246352061943026506208288741541838764335627886019385178321371750627831582409822253422561134684967681619733091140978105379771452136052894987460"],["company","308506593161602146422236162254207522733309695488257673657149679187604027788788301632934940120633502394073533630617796826645006050532045248502367279072429635588822684595333572092127543498035925335237979404887233740354538177752430593136215182774341218519293543319135241033968839187227284652960841614558413851438516619249453974552253364283719582671993459085751642426278040081409312402449385486703398571774246057886924582318221765136299663332411882429574313414292955513480166432294774731250411223539620506479699658518336454319018172085511573560113382586106496127000403654170853423797643696539042605485705826845326042780499128650598041544804392982211053872024997096709276699276491209788189077366791"],["name","2357964444471064594490653957566288780937362626914363515268139806059608119588395908594434967587082102640320865860587176699317197797142595482938046269645202695029419614415327145269446701820990373603410050143083906273366218933005329733673599620797384169820150892060058022852598738574685685830853734515834540104836878448585473629008600277944329080354501161641933703799755994380852470082185712542662991902830970677142668617388570453122971067020400195744306128502335094449343330635540469291416997161969492018361789649900858711242508630249233464115649427760807071412052023770593598642047451765033868432931591206236180378876120809135364600235591782367417044103150321183151737598052760740426104825204430"],["master_secret","1848088263481290159939296840437724548598117720652081879808426208189529513645655762702714137216956170995515600365794094641762300411905090148385128898620913825200126496826849225275399644747304898050492908747088893111597808270125337709662196832379165618376798814150255996849649906141035818436154357206520982908502063964040408114582613017981150174386783795026368545852680288190359383802608601284510275678969727523229756182016611218113227000597305026223388370089637623099660629212188027420931573437090642293622935284495516066103796867792981639372833134553555856790811817482459368530421420004252715208030943993786154004677831329986721865243905721276783698760515883422149547238900495285956343435587221"]]},"nonce":"574821386530292787796970"}
  const [id_cred_offer, set_id_cred_offer] = useState(_id_cred_offer);
  // 2. 인증 서버에서 제공 받음 VC 인증서
  const _cred = {
    "schema_id": "Th7MpTaRZVRYnPiabds81Y:2:User_Info:1.0",
    "cred_def_id": "Th7MpTaRZVRYnPiabds81Y:3:CL:23:TAG1",
    "rev_reg_id": null,
    "values": {
        "did": {
            "raw": "TeoLosFGjhNsRsw6G9jjZJ",
            "encoded": "11906612353324844186516784269095317256484363758267228338241637869531288682425602657951175916859004941317217"
        },
        "company": {
            "raw": "UI500",
            "encoded": "1251266864123267179885360"
        },
        "name": {
            "raw": "윈윈해",
            "encoded": "18832105114606389647190524290045845653774900"
        }
    },
    "signature": {
        "p_credential": {
            "m_2": "46251365767318967751197367455411532942311627538022137317825757536703967975290",
            "a": "77498843915309531749530865326261614220066716952877068626488654911851912092580773704217163041426784793950122903280232376652256899943350740726981583683276250546752895241772003334148913642828009579275790781266346280684651640962905066560626302568818777105879464861573753780931248280269791888631881094076609788089430487204925067934928834329746665717592441586064956195801626836854609603318914230633065210870558469132520137679365593236036427035147194182473125794565453165172060385515730156863287743257650812903002056412798832965074204389911684744806783948545739113445878329750859169934765335308041623806146221720737589196490",
            "e": "259344723055062059907025491480697571938277889515152306249728583105665800713306759149981690559193987143012367913206299323899696942213235956742930077973243196230635903987939033445053",
            "v": "8298199705673994548474536671963343565906707978787189931434108870313952009838056723262410542755890418258096013077840643247332829165242901516034520403260828752277309059771455702289495487387457428122333974297467708478003385059848869886877551503238389594333306192084216820393106276391868132568421030729334370482992996318762754678508077159634333592234899262725004614977413330102788095178480410517818208540903575937771982086177133834996654326167577113977797244928250254426186071814114225258581259344539505035651188646423454091920073074771427971374964936838973024641492344276172311509612394447931393182522122491288902817465752703660695591258174523856783560116566962967351717109227587068724553280148595282598727084382555810213388275341794887579510590445223675305072772742227868696934095090998192235483195271375962153377632371423"
        },
        "r_credential": null
    },
    "signature_correctness_proof": {
        "se": "8685642932116708359150793273242731120749683786649394519583706709880919359060470684491413015829577588957617122408566960205331834029932833692966531474640740838947236437470109409446498861255315486752438689721475278671568118204695604336166874526626272630966961112048503698286651244828773285601524241615283279385244586125561599071469689780273814054484549423658646910701938918344028709014356852812044036022225291915678847115477225747729014062643559071232236239986363462371197559759235764899883662755840331931660149723435510177539121579301784012554660017434379081254401935481068901362865918729448236508335424732342538869477",
        "c": "62199825854072028599734820648347715261225212341427622645110508183448863940498"
    },
    "rev_reg": null,
    "witness": null
}
const [cred, set_cred] = useState(_cred);
// 3. 인증서버에서 제공 받음 VP 인증 요청
const login_proof_request = {
  "nonce": "1991530262175979669824",
  "name": "login",
  "version": "0.1",
  "requested_attributes": {
      "attr1_referent": {
          "name": "name",
          "restrictions": [
              {
                  "cred_def_id": "Th7MpTaRZVRYnPiabds81Y:3:CL:23:TAG1"
              }
          ]
      },
      "attr2_referent": {
          "name": "company",
          "restrictions": [
              {
                  "cred_def_id": "Th7MpTaRZVRYnPiabds81Y:3:CL:23:TAG1"
              }
          ]
      },
      "attr3_referent": {
          "name": "did",
          "restrictions": [
              {
                  "cred_def_id": "Th7MpTaRZVRYnPiabds81Y:3:CL:23:TAG1"
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

  const getIdCrredOfer = async function () {
    axios({
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      url: 'http://54.180.122.238:8080/signUp/offer'
    }).then(res => {
      const { data, code, message, column } = res.data
      
      if(code === "1") {
        set_id_cred_offer(data)
        console.log(JSON.stringify(data))
      }

      alert(message);
    }).catch(err => {
      alert(JSON.stringify(err));
    });
  }

  const CreateCredentialReq = async function () {
    const credDefd = id_cred_offer.cred_def_id;
    const get_cred_def_request = await indy.buildGetCredDefRequest(did, credDefd);
    const get_cred_def_response = await indy.submitRequest(poolHandle, get_cred_def_request);
    const [idCredDefId, idCredDef] = await indy.parseGetCredDefResponse(get_cred_def_response);

    console.log(JSON.stringify('walletHandle'));
    console.log(JSON.stringify(walletHandle));
    console.log(JSON.stringify('did'));
    console.log(JSON.stringify(did));
    console.log(JSON.stringify('id_cred_offer'));
    console.log(JSON.stringify(id_cred_offer));
    console.log(JSON.stringify('idCredDef'));
    console.log(JSON.stringify(idCredDef));

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

  const getCred = async function () {
    // 데이터 넘겨줌...
    axios({
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      url: 'http://54.180.122.238:8080/signUp/offer'
    }).then(res => {
      const { data, code, message, column } = res.data
      
      if(code === "1") {
        set_cred(data)
      }

      alert(message);
    }).catch(err => {
      alert(JSON.stringify(err));
    });
  }

  const getVC = async function () {
    const result = await indy.proverStoreCredential(walletHandle, null, credReqMetadata, cred, credDef);
    console.log('발급');
    console.log(JSON.stringify(result))
  }

  const _proverGetCredential = async function () {
    const result = await indy.proverGetCredential(walletHandle, '0439e8fa-9fed-4b99-ab18-13793787473a');
    console.log(JSON.stringify(result));
  }

  const vpTest = async function () {
    const proof_request = login_proof_request

    const proverCredSearchHandle = await indy.proverSearchCredentialsForProofReq(walletHandle, proof_request);
    const temp_attr1 = await indy.proverFetchCredentialsForProofReq(proverCredSearchHandle, 'attr1_referent', 10);
    const temp_attr2 = await indy.proverFetchCredentialsForProofReq(proverCredSearchHandle, 'attr2_referent', 10);
    const temp_attr3 = await indy.proverFetchCredentialsForProofReq(proverCredSearchHandle, 'attr3_referent', 10);

    const cred_for_attr1 = temp_attr1[0]['cred_info']
    const cred_for_attr2 = temp_attr2[0]['cred_info']
    const cred_for_attr3 = temp_attr3[0]['cred_info']

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
        // attr1_referent: 'testattr1'
      },
      requested_attributes: {
        attr1_referent: {
          // cred_id: cred_for_attr2['referent'],
          cred_id: cred_for_attr1['referent'],
          revealed: true
        },
        attr2_referent: {
          // cred_id: cred_for_attr2['referent'],
          cred_id: cred_for_attr2['referent'],
          revealed: true
        },
        attr3_referent: {
          // cred_id: cred_for_attr2['referent'],
          cred_id: cred_for_attr3['referent'],
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

    console.log(JSON.stringify(login_proof_request.nonce));
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

      <View style={{ flexDirection: 'row' }}>
        <Button title='CREATE MASTER SECRET' onPress={createMasterSecret} />
        <Button title='GET ID CRED OFFER' onPress={getIdCrredOfer} />
      </View>

      <View style={{ flexDirection: 'row' }}>
        <Button title='CreateCredentialReq' onPress={CreateCredentialReq} />
        <Button title='GET CRED' onPress={getCred} />
      </View>

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
