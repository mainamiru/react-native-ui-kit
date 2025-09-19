import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Button,
  Picker,
  Spacer,
  Text,
  TextInput,
} from "@mainamiru/react-native-ui-kit";
import React from "react";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";

const AddProductScreen = () => {
  const [name, setName] = React.useState("");
  const [sku, setSku] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [brand, setBrand] = React.useState("");
  const [unit, setUnit] = React.useState("");
  const [purchasePrice, setPurchasePrice] = React.useState("");
  const [salePrice, setSalePrice] = React.useState("");
  const [stockQty, setStockQty] = React.useState("");
  const [barcode, setBarcode] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleSubmit = () => {
    // TODO: integrate with backend API
    console.log({
      name,
      sku,
      category,
      brand,
      unit,
      purchasePrice,
      salePrice,
      stockQty,
      barcode,
      description,
    });
  };

  return (
    <KeyboardAvoidingView
      behavior="height"
      style={{ flex: 1 }}
      keyboardVerticalOffset={100}
    >
      <ScrollView
        contentContainerStyle={{ gap: 10, padding: 10, paddingBottom: 20 }}
        keyboardShouldPersistTaps="handled"
      >
        <TextInput
          label="Product Name"
          placeholder="Enter product name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          label="SKU"
          placeholder="Stock Keeping Unit"
          value={sku}
          autoCapitalize="characters"
          onChangeText={setSku}
        />

        <Picker.Select
          label="Category"
          selectedValue={category}
          onValueChange={setCategory}
          bottomSheetHeight={400}
        >
          {/* TODO: replace with dynamic categories */}
          <Picker.Item label="Electronics" value="electronics" />
          <Picker.Item label="Grocery" value="grocery" />
          <Picker.Item label="Fashion" value="fashion" />
          <Picker.Item label="Home" value="home" />
        </Picker.Select>

        <Picker.Select
          label="Brand"
          selectedValue={brand}
          onValueChange={setBrand}
          bottomSheetHeight={400}
        >
          {/* TODO: replace with dynamic brands */}
          <Picker.Item label="Generic" value="generic" />
          <Picker.Item label="Brand A" value="brand_a" />
          <Picker.Item label="Brand B" value="brand_b" />
        </Picker.Select>

        <Picker.Select
          label="Unit"
          selectedValue={unit}
          onValueChange={setUnit}
          bottomSheetHeight={400}
        >
          <Picker.Item label="Piece" value="pc" />
          <Picker.Item label="Box" value="box" />
          <Picker.Item label="Kilogram" value="kg" />
          <Picker.Item label="Liter" value="ltr" />
        </Picker.Select>

        <TextInput
          label="Purchase Price"
          placeholder="0"
          keyboardType="decimal-pad"
          value={purchasePrice}
          onChangeText={(value) => {
            const numericValue = value.replace(/[^0-9.]/g, "");
            setPurchasePrice(numericValue);
          }}
        />
        <TextInput
          label="Sale Price"
          placeholder="0"
          keyboardType="decimal-pad"
          value={salePrice}
          onChangeText={(value) => {
            const numericValue = value.replace(/[^0-9.]/g, "");
            setSalePrice(numericValue);
          }}
        />
        <TextInput
          label="Stock Quantity"
          placeholder="0"
          keyboardType="number-pad"
          value={stockQty}
          onChangeText={(value) => {
            const numericValue = value.replace(/[^0-9]/g, "");
            setStockQty(numericValue);
          }}
        />

        <TextInput
          label="Barcode"
          placeholder="Scan or enter barcode"
          value={barcode}
          onChangeText={setBarcode}
          right={({ style, color }) => (
            <View style={style}>
              <MaterialCommunityIcons
                size={20}
                color={color}
                name="barcode-scan"
              />
            </View>
          )}
          // onRightIconPress: integrate scanner later
        />

        <TextInput
          label="Description"
          placeholder="Short description"
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={4}
          inputStyle={{ height: 120, textAlignVertical: "top" }}
        />

        <View style={{ gap: 8 }}>
          <Text style={{ fontWeight: "500" }}>Images</Text>
          <Button variant="outlined" onPress={() => {}}>
            Add Images
          </Button>
          <Text style={{ color: "grey" }}>Optional. Add up to 5 images.</Text>
        </View>

        <Spacer size={10} />
        <Button onPress={handleSubmit}>Save Product</Button>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddProductScreen;
