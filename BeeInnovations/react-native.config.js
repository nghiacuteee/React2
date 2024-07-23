module.exports = {
    project: {
        ios: {},
        android: {},
    },
    assets: ['./assets/fonts'],
    // su dung cau lenh npx react-native-asset de chay cho cai fonts vao ben android roi mois su dung duoc
    dependencies: {
        'react-native-vector-icons': {
            platforms: {},
        },
    }, 
};