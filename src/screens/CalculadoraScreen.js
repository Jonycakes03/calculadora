import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    padding: 20,
    paddingTop: 100, 
  },
  text: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 16,
    color: '#f0bc69ff',
    letterSpacing: 0.3,
  },
  input: {
    borderWidth: 3,
    borderColor: '#c0d899ff',
    borderRadius: 12,
    width: '90%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 10,
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: '#e1e7c3ff',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },

  circleRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '90%',
    marginVertical: 10,
  },



  result: {
    fontSize: 22,
    fontWeight: '800',
    color: '#f0bc69ff',
    marginTop: 20,
  },
});

export default styles;

