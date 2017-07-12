/**
 * Created by zhuhuiping on 2017/7/5.
 */
import React from 'react';
import {View,Text,StyleSheet,ListView,Image,RefreshControl,ActivityIndicator,TouchableOpacity} from  'react-native';

class MarketTabScreen extends React.Component{

    setTabBadge = () =>{
        this.props.navigator.setTabBadge({
            tabIndex: 0,
            badge: Math.floor(Math.random() * 20) + 1,
        });
    };
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
        this.state = {
            dataSource: ds,
            loaded:false,
            isRefreshing:false,
            isShowBottomRefresh:true,
            isFirstTime:true,
        };

    }
    renderRow(rowData) {
    return (
    <TouchableOpacity onpress = { () => this._appendEvent('press')}
    onPressIn = {() => this._appendEvent('pressIn')}
    onPressOut = {() => this._appendEvent('presssOut')}
    onLongPress = {() => this._appendEvent('longPress')} >
        <View style={styles.container}>
            <Image
                source={{uri: rowData.posters.thumbnail}}
                style={styles.thumbnail}
            />
            <View style={styles.rightContainer}>
                <Text style={styles.title}>{rowData.title}</Text>
                <Text style={styles.year}>{rowData.year}</Text>
            </View>
        </View>
    </TouchableOpacity>
            );
    }
    _appendEvent(eventName){
        console.log(eventName);
        //alert(eventName);
    }


    componentDidMount(){
        this.fetchData()
    }

    // fetchData(){
    //     fetch('https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json')
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //         this.setState({
    //             dataSource: this.state.dataSource.cloneWithRows(responseJson.movies),
    //             loaded:true,
    //         });
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         })
    //         .done();
    //
    // }
    async fetchData(){
        try {
            let response = await fetch('https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json');
            let responseJson = await response.json();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(responseJson.movies),
                loaded:true,
                isRefreshing:false,
                isShowBottomRefresh:false,
            });
        }catch (error){
            console.error(error)
        }
    }
    _onRefresh(){
        console.log('onRefresh1');
        this.setState({
            isRefreshing:true,
            isShowBottomRefresh:true,
        });
        this.fetchData();
        // setTimeout(() => {
        //     this.fetchData()
        // },5000);
    }
    _onEndreached(){
        if (this.isFirstTime){
            if (!this.state.isShowBottomRefresh){
                this.isFirstTime = false;
            }
            return ;
        }
        this.isFirstTime = true;
        this.setState({isShowBottomRefresh:true});
        setTimeout(()=>{
            this.isFirstTime = true;
            this.setState({
                isShowBottomRefresh: false
            });
        },10);
    }


    render(){
        if (!this.state.loaded){
            return this.renderLoadingView();
        }
        return this.renderListView();
    }
    renderLoadingView(){
        return(
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }
    renderFooter(){
        if (this.state && this.state.isShowBottomRefresh){
            return (
                <View style={{marginVertical: 10}} ><ActivityIndicator /></View>
            );
        }
        return <View style={{marginVertical: 0}} />;
    }


    renderListView(){
        return(
        <View>

            <ListView
                refreshControl={ <RefreshControl
                    refreshing={this.state.isRefreshing}
                    onRefresh={this._onRefresh.bind(this)}
                    tintColor="#ff0000"
                    title="Loading..."
                    titleColor="#00ff00"
                    colors={['#ff0000', '#00ff00', '#0000ff']}
                    progressBackgroundColor="#ffff00"
                />
                }
                dataSource={this.state.dataSource}
                renderRow={(rowData) => this.renderRow(rowData)}
                renderFooter = {this.renderFooter.bind(this)}
                onEndReached = {this._onEndreached.bind(this)}
            />
        </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    },
    thumbnail: {
        width: 53,
        height: 81,
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
});
export default MarketTabScreen;