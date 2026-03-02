import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
} from "react-native";

const DATA = [
  {
    id: "1",
    type: "task",
    title: "Bước 1 Xác định nhu cầu khách hàng",
    desc: "Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00",
    time: "20/08/2020, 06:00",
  },
  {
    id: "2",
    type: "customer",
    title: "Bạn có khách hàng mới!",
    desc: "Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.",
    time: "20/08/2020, 06:00",
  },
  {
    id: "3",
    type: "customer",
    title: "Khách hàng được chia sẻ bị trùng",
    desc: "Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.",
    time: "20/08/2020, 06:00",
  },
  {
    id: "4",
    type: "customer",
    title: "Khách hàng được thêm bị trùng",
    desc: "Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.",
    time: "20/08/2020, 06:00",
  },
  {
    id: "5",
    type: "task",
    title: "Công việc sắp đến hạn trong hôm nay",
    desc: "Bạn có 17 công việc sắp đến hạn trong hôm nay.",
    time: "20/08/2020, 06:00",
  },
  {
    id: "6",
    type: "task",
    title: "Công việc đã quá hạn",
    desc: "Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.",
    time: "20/08/2020, 06:00",
  },
];

const LeftIcon = ({ type }) => {
  const isTask = type === "task";
  return (
    <View style={[styles.iconWrap, isTask ? styles.iconTask : styles.iconUser]}>
      <Text style={styles.iconText}>{isTask ? "✓" : "👥"}</Text>
    </View>
  );
};

const Item = ({ item }) => {
  const isTask = item.type === "task";
  return (
    <View style={[styles.row, isTask && styles.rowTask]}>
      <LeftIcon type={item.type} />

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {item.title}
        </Text>

        <Text style={styles.desc} numberOfLines={3} ellipsizeMode="tail">
          {item.desc}
        </Text>

        <Text style={styles.time} numberOfLines={1}>
          {item.time}
        </Text>
      </View>
    </View>
  );
};

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Thông báo</Text>
      </View>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item item={item} />}
        ItemSeparatorComponent={() => <View style={styles.sep} />}
        contentContainerStyle={{ paddingVertical: 6 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },

  header: {
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    backgroundColor: "#fff",
  },
  headerTitle: { fontSize: 18, fontWeight: "700" },

  row: {
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: "#fff",
  },
  rowTask: { backgroundColor: "#EAF4FF" }, // nền xanh nhạt giống ảnh

  iconWrap: {
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    marginTop: 2,
  },
  iconTask: { backgroundColor: "#2D6CDF" },
  iconUser: { backgroundColor: "#4C77C8" },
  iconText: { color: "#fff", fontWeight: "800" },

  content: { flex: 1 },

  title: { fontSize: 14.5, fontWeight: "700", color: "#1b1b1b" },
  desc: { marginTop: 4, fontSize: 13, color: "#4a4a4a", lineHeight: 18 },
  time: { marginTop: 6, fontSize: 12, color: "#9a9a9a" },

  sep: { height: 1, backgroundColor: "#f0f0f0" },
});