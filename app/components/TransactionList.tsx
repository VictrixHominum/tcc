import { ScrollView, View, Text, StyleSheet } from 'react-native';

// @ts-ignore
const TransactionTable = ({ data }) => {

  const renderHeader = () => {
    return (
      <View style={styles.headerRow}>
        <Text style={styles.headerCell}>Description</Text>
        <Text style={styles.headerCell}>Date</Text>
        <Text style={styles.headerCell}>Amount</Text>
        <Text style={styles.headerCell}>Total</Text>
      </View>
    );
  };
  const renderRow = (item: any, index: number) => {
    const rowStyle = index % 2 === 0 ? styles.rowEven : styles.rowOdd;
    const amountColor = item.amount >= 0 ? styles.green : styles.red;
    const totalColor = item.total >= 0 ? styles.black : styles.red;
    const isAmountNegative = item.amount < 0;
    const isTotalNegative = item.total < 0;
    const amountString = isAmountNegative ? `-£${Math.abs(item.amount).toFixed(2)}` : `£${item.amount.toFixed(2)}`;
    const totalString = isTotalNegative ? `-£${Math.abs(item.total).toFixed(2)}` : `£${item.total.toFixed(2)}`;

    return (
      <View style={[styles.row, rowStyle]} key={item.id}>
        <Text style={styles.cell}>{item.name}</Text>
        <Text style={styles.cell}>{item.date}</Text>
        <Text style={[styles.cell, amountColor]}>{amountString}</Text>
        <Text style={[styles.cell, totalColor]}>{totalString}</Text>
      </View>
    );
  };


  return (
    <View style={styles.container}>
      {renderHeader()}
      <ScrollView style={styles.scrollView}>
        {data.map((item: any, index: number) => renderRow(item, index))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 17,
  },
  green: {
    color: 'green',
  },
  red: {
    color: 'red',
  },
  black: {
    color: 'black',
  },
  headerRow: {
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: '#22382C',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerCell: {
    flex: 1,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 17,
  },
  scrollView: {
    flex: 1,
  },
  rowEven: {
    backgroundColor: 'rgba(167,136,46,0.08)', // Very pale color for even rows
  },
  rowOdd: {
    backgroundColor: 'rgba(34,56,44,0.08)', // A slightly different pale color for odd rows
  },

});

export default TransactionTable;
