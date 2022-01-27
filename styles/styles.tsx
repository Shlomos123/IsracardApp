import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

export const BackgroundColors = StyleSheet.create({
    primary: {
        backgroundColor: '#2196F3'        
    },  
    white: {
        backgroundColor: 'white'
    },
    black: {
        backgroundColor: 'black'
    },
    disabled: {
        backgroundColor: '#B5B5B5'
    },
    headLine: {
        backgroundColor: '#455A64'
    },
    headLine2: {
        backgroundColor: 'white'
    },
    listAlternate: {
        backgroundColor: '#ECEFF1'
    },
    listBackGround: {
        backgroundColor: '#EEEEEE'
    },
    purple: {
        backgroundColor: '#9c27b0'
    }
});

export const ForegroundColors = StyleSheet.create({
    primary: {
        color: '#2196F3'
    },
    white: {
        color: 'white'
    },
    headLine: {
        color: '#455A64'
    },
    listAlternate: {
        color: '#ECEFF1'
    },
    disabled: {
        color: '#B5B5B5'
    },
    black: {
        color: 'black'
    },
    error: {
        color: 'red'
    },
    warning: {
        color: '#FFD600'
    },    
});

export const General = StyleSheet.create({
    margin1: {
        margin: 1
    },
    margin3: {
        margin: 3
    },
    margin5: {
        margin: 5
    },
    margin10: {
        margin: 10
    },
    header: {

    },
    footer: {

    },
    button: {

    },
    fullFlex: {
        flex: 1,
    },
    halfFlex: {
        flex: 0.5,
    },
    textSmall: {
        fontSize: 14,
    },
    text: {
        fontSize: 16,
    },
    textBold: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    textCenter: {
        fontSize: 16,
        textAlign: 'center'
    },
    textRight: {
        fontSize: 16,
        textAlign: 'right'
    },
    textLeft: {
        //fontSize: 16,
        textAlign: 'left'
    },
    label: {
        fontSize: 18,
    },
    labelBold: {
        fontSize: 18,
        //fontWeight: 'bold'
    },
    labelBold2: {
        fontSize: 20,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        alignSelf: "center"
    },
    underline: {
        textDecorationLine: 'underline'
    },
    input: {
        fontSize: 20
    },
    iconVerySmall: {
        fontSize: 12
    },
    iconSmall: {
        fontSize: 20
    },
    dataSectionsStyle: {
        fontSize: 14,
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center"
    },
    iconMedium: {
        fontSize: 25
    },
    iconLarge: {
        fontSize: 30
    },
    image: {
        alignSelf: 'center',
        paddingTop: height*0.14,
        paddingBottom: width * 0.32,
      
    },
    imageBigScreen: {
        alignSelf: 'center',
        paddingTop: width * 0.2,
        paddingBottom: width * 0.4,

    },
    loadingContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
    },
    activityIndicator: {
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderRadius: 10
    },
    loadingIndicator: {
        padding: 24,
        //margin: 100,
        //marginTop: '30%',
        //marginBottom: '50%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderRadius: 20, 
    },
    opacityOn: {
        opacity: 0.85
    },
    opacityOff: {
        opacity: 0.0
    },
    rowDirection: {
        flexDirection: 'row'
    },   
    rowReverse: {
        flexDirection: 'row-reverse'
    },
    centerContent: {
        alignContent: 'center'
    },  
    modalOuterView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000080'
    },
    
    modalInnerView: {
        borderRadius: 10,
        backgroundColor: 'white',
        alignSelf: 'stretch',
        padding: 10,
        margin: 10,
        maxHeight: height * 0.93,
        maxWidth: width * 0.93
    },
     modalInnerFixSizeView: {
        borderRadius: 5,
        backgroundColor: 'white',
        alignSelf: 'stretch',
        padding: 5,
        margin: 5,
        height: height * 0.75,
        width: width * 0.7
    },
    deviceWidth: {
        width: width*0.85,
    },
    deviceWidthIOS: {
        width: width,
    },
    headerMargin: {
        marginTop: 8,
    },
    datePickerPlaceHolder: {
        height: 40,
        color: "black",
        fontSize: 18
    },
    datePickerTextStyle: {
        color: "black",
        fontSize: 18
    },
    deviceHeight: {
        height: height,
    },
    noBorder: {
        borderWidth: 0
    },    
    imageBackground: {
        flex: 1,
        width: width,
        height: height,
        justifyContent: 'center',
        resizeMode: 'cover',
    },
    imageBackgroundOpacity: {
        opacity: 0.8
    },
    imageBackgroundLightOpacity: {
        opacity: 0.3
    },
});

export const LoginStyles = StyleSheet.create({
    right: {
        flex: 0.2
    },
    rightIOS: {
        flex: 0.4
    },
    body: {
        alignItems: 'flex-end'
    },
    input: {
        textAlign: 'right'
    },
});

export const BaseScreenStyles = StyleSheet.create({
    titlePath: {
        marginHorizontal: 5,
        fontSize: 14,
        borderBottomWidth: 0.6
    },
    proceduresMenu: {
        marginHorizontal: 3,
    },
    menuTriggerButton: {
        marginRight: 0,
        marginLeft: 0,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: 'transparent',
        //backgroundColor: "#62B1F6",
        elevation: 0
    },
    menuTriggerButtonIOS: {
        marginRight: 0,
        marginLeft: 0,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: 'transparent',
        //backgroundColor: "#62B1F6",
        elevation: 0
    },
    proceduresIcon: {
        paddingHorizontal: 10,              
    },    
    procedureTypeIcon: {
        fontSize: 20,
        alignSelf: 'center',
        flex: 0.1
    }
});

export const MainMenuStyles = StyleSheet.create({
    footer: {
        height: 45,
        backgroundColor: 'transparent',
        margin: 3
    },
    formButton: {
        minHeight: 80
    }
});

export const RowsListStyles = StyleSheet.create({
    listFooter: {
        height: 50,
    },
    cardItem: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 0,
        
    },
    cardItemTopBorder: {
        borderTopWidth: 1,
        borderTopColor: '#ECEFF1'
    },
    cardItemBottomBorder: {
        borderBottomWidth: 1,
        borderBottomColor: '#ECEFF1'
    },
    cardItemButtonHeight: {
        height: 30
    },
    cardItemButtonText: {
        paddingLeft: 5,
        paddingRight: 5,
    },
    cardItemButtonTextDecoration: {       
        textDecorationLine: 'underline'
    },    
    titleText: {
        maxWidth: '70%'
    },    
    htmlWebView: {
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        height: height * 0.45,                
    },
    paramsContainerTopBorder: {
        borderTopWidth: 2
    },
    htmlListItem: {
        paddingTop: 5,
        paddingBottom: 5
    },
    htmlInput: {
        backgroundColor: "#FFFFE0",
        //maxHeight: 100,
        borderWidth: 1,
        marginTop: 5,
        marginBottom: 5,
        textAlignVertical: 'top'
    },
    htmlInputIOS: {
        width: width * 0.9,
        height: height / 8,
        backgroundColor: "#FFFFE0",
        borderWidth: 1,
        marginTop: 5,
        marginBottom: 5,
        textAlignVertical: 'top'
    },
    commentIOS: {
        width: width * 0.9,
        height: height / 4,
    },
    htmlFooter: {
        height: 45,
        backgroundColor: 'transparent',
        margin: 5
    },
});

export const RowFieldStyles = StyleSheet.create({
    fieldHeader: {
        flex: 1,
        flexDirection: 'row-reverse',    
        alignSelf: 'stretch',        
    },
    title: {        
        alignSelf: 'flex-end',
        marginHorizontal: 2,
        padding: 5,
        fontSize: 19,
        color: 'black'
    },
    disabledTitle: {
        alignSelf: 'flex-end',
        padding: 5,
        marginHorizontal: 2,
        fontSize: 19,
        color: '#B5B5B5'
    },
    listFooter: {
        height: 50,
    },
    rootView: {
        paddingLeft: 5
    },
    listItem: {
        flexDirection: 'column',
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0
    },
    fieldInput: {
        fontSize: 18,
        height: 40
    },
    DatePickerStyle: {
        width: width * 0.95,
        height: 40
    },
    margin5Left: {
        marginLeft: 5
    },
    sortOrderLabel: {
        alignSelf: 'center',
        marginHorizontal: 5,
        fontSize: 16,
        color: 'black'
    },
    sortOrderButton: {
        alignSelf: 'center',
    },   
    sortOrderIcons: {
        marginHorizontal: 5,
        fontSize: 20
    },   
    margin5bottom: {
        marginBottom: 5
    },
    borderColorUnchecked: {
        borderColor: '#B5B5B5'
    },   
    itemsFlexStart: {
        alignItems: 'flex-start'
    },
    itemsMarginTop20: {
        //padding: 10
    },
    fabSize: {
        fontSize: 46
    },
    fabIconFontSize: {
        fontSize: 28
    },
    fabItemSize: {
        fontSize: 38
    },
    fabItemIconFontSize: {
        fontSize: 24
    },
    fabItemTextContainer: {
        height: 24
    },
    fabItemTextContainerIOS: {
        height: 64
    },
    fabItemText: {
        fontSize: 16,
        bottom: 2
    }

});

export const SideBarStyles = StyleSheet.create({
    body: {
        flex: 0.8,
        alignItems: 'flex-end'
    },
    right: {
        flex: 0.2
    },
    icon: {
        alignSelf: 'flex-end',
        fontSize: 50
    },
    formTitle: {
        flex: 1,
        marginRight: 5,        
    },
    currentFormTitle: {
        flex: 1,
        marginRight: 5,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    navigationPathView: {
        flexDirection: 'row-reverse',
        margin: 3,
        marginBottom: 5,
        flexWrap: 'wrap'
    },
    navigationPath: {
        fontSize: 14
    },
    navigationPathCurrent: {
        fontSize: 14,
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    },
    sectionHeaderText: {
        fontWeight: 'bold',
        fontSize: 18,
        marginHorizontal: 3,
    },    
    imageBackground: {
        width: '100%',
        height: '100%'
    },
    footer: {
        height: 45,
        marginBottom: 0,
        flexDirection: 'column' 
    },
    footer2: {
        height: 85,
        marginBottom: 0,
        flexDirection: 'column'
    },
});

export const GlobalMessageStyles = StyleSheet.create({   
    messageTitleContainer: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between'
    },
    messageTitle: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontSize: 18
    },
    messageContnet: {       
        marginBottom: 50,
        fontSize: 16
    },
});

export const FilterPickerStyles = StyleSheet.create({
    keyTitle: {
        flex: 0.3,
        paddingRight: 10,
        fontSize: 30,
        textAlign: 'right'
    },
    labelTitle: {
        flex: 0.7,
        paddingRight: 10,
        fontSize: 30,
        textAlign: 'right'
    },
    optionItem: {
        marginLeft: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 7,
        paddingBottom: 7
    },
    optionKey: {
        flex: 0.3,
        textAlign: 'right',
        paddingRight: 10,
        paddingLeft: 0,
        fontSize: 20
    },
    optionTitle: {
        flex: 0.7,
        textAlign: 'right',
        paddingRight: 10,
        paddingLeft: 0,
        fontSize: 20
    }
});

export const CustomHeaderStyles = StyleSheet.create({
    header: {
        paddingLeft: 0,
        paddingRight: 0
    },
    right: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flex: 0.35
    },
    backButton: {
        marginRight: 0,
        marginLeft: 0,
        paddingLeft: 8,
        paddingRight: 10
    },
    moreButton: {
        marginRight: 0,
        marginLeft: 0,
        paddingLeft: 15,
        paddingRight: 15
    },
    body: {
        alignItems: 'flex-end'
    },
    rightFlexOnly: {
        flex: 0.35
    }
});

export const CustomFooterStyles = StyleSheet.create({
    footer: {
        height: 40
    },
    button: {
        height: 40,
        borderRadius: 0
    }
});

export const ProcedureListStyles = StyleSheet.create({
    procButton: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'flex-end'
    },
    title: {
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontSize: 20,
        marginBottom: 10
    },
    exitButton: {
        marginTop: 10
    }
});

export const ProcedureStepStyles = StyleSheet.create({
    procTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontSize: 20,
        marginBottom: 10
    },
    stepTitle: {
        textDecorationLine: 'underline',
        fontSize: 18,
        marginLeft: 15
    },
    noBottomBorder: {
        borderBottomWidth: 0
    },
    exitButton: {
        marginTop: 10
    },
    margin30Right: {
        marginRight: 30
    }
});

export const ProcedureFieldStyles = StyleSheet.create({
    lookupIcon: {
        marginRight: 10,
        marginLeft: 5
    },
    fieldView: {
        alignSelf: 'stretch'
    },
    textField: {
        marginLeft: 5,
        marginRight: 5,
        color: 'black'
    },
    textFieldMandatory: {
        marginLeft: 5,
        marginRight: 5,
        color: 'red'
    },
    dateField: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 0,
        borderBottomWidth: 0.6,
        borderBottomColor: '#D9D5DC'
    },
    imageIcon: {
        marginLeft: 5,
        color: 'black'
    }
});

export const CompaniesStyles = StyleSheet.create({
    title: {
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10
    },
    buttonsContainer: {
        flexDirection: 'row-reverse',
        //marginTop: 10
    }
});

export const SettingsStyles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontSize: 20,
        marginBottom: 10
    },
    titleDocSign: {
        marginTop: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontSize: 20
    },
    buttonsContainer: {
        flexDirection: 'row-reverse',
        marginTop: 1
    },
    buttonsContainer2: {
        flexDirection: 'row-reverse',
    },
    deviceIDLabel: {
        fontSize: 14,
        color: '#2196F3',
        textDecorationLine: 'underline',
    },
});

export const DashboardStyles = StyleSheet.create({
    deckSwiper: {
        //flex: 0.2,
        flexGrow: 0.2,
        marginBottom: 62, 
        padding: 5       
    },
    deckSwiperImage: {
        height: height * 0.2,
        width: '100%'
    },
    messageCard: {
        padding: 5,
        elevation: 3,
        flex: 0.3,
        flexGrow: 1,
        marginBottom: -16
    },
    messageCard2: {
        padding: 5,
        elevation: 3,
        flex: 0.3,
        flexGrow: 1,
    },
    messageCardStyle: {
        alignSelf: 'flex-end',
        fontSize: 12
    },
    messageCardStyle2: {
        alignSelf: 'flex-end',
        fontSize: 20
    },
    dataCard: {
        padding: 5,
        elevation: 3,
        flex: 0.3,
        flexGrow: 1,
        marginBottom: 50
    },
    dataCardStyle: {
        marginTop: 10,
        backgroundColor: "white",
        flex: 1,
        flexDirection: "row-reverse",
        borderBottomColor: "gray",
        fontStyle: "italic",
        padding: 10,
        borderBottomWidth: 1
        //justifyContent: 'space-between'
    },
    dividerWithPadding: {
        backgroundColor: "white", //"#e3f1f1",
        fontStyle: "italic",
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        padding: 10
    },
    dividerWithPadding2: {
        backgroundColor: "white", //"#e3f1f1",
        fontStyle: "italic",
        borderBottomColor: "gray",
        borderBottomWidth: 1,
    },
    dividerWithPadding3: {
        backgroundColor: "white", //"#e3f1f1",
        fontStyle: "italic",
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        padding: 10
    },
});



