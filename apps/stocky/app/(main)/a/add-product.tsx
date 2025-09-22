import { createProduct } from "@/actions";
import { useAuth } from "@/hooks";
import { brands } from "@/utils/data.utils";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Button,
  Container,
  Picker,
  Spacer,
  TextInput,
  useToaster,
} from "@mainamiru/react-native-ui-kit";
import React from "react";
import { FlatList, KeyboardAvoidingView, ScrollView, View } from "react-native";

const AddProductScreen = () => {
  const toast = useToaster();
  const { user } = useAuth();
  const [sku, setSku] = React.useState("");
  const [name, setName] = React.useState("");
  const [unit, setUnit] = React.useState("");
  const [brand, setBrand] = React.useState("");
  const [barcode, setBarcode] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [stockQty, setStockQty] = React.useState("");
  const [salePrice, setSalePrice] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [purchasePrice, setPurchasePrice] = React.useState("");
  const [isProcessing, setIsProcessing] = React.useState(false);

  const handleSubmit = async () => {
    setIsProcessing(true);
    try {
      // TODO: integrate with backend API
      await createProduct({
        name,
        sku,
        unit,
        brand,
        barcode,
        category,
        image: null,
        description,
        active: true,
        stock: parseInt(stockQty),
        createdBy: user?.uid || null,
        price: parseInt(salePrice),
        costPrice: parseInt(purchasePrice),
      });
      toast.success("Product has been added successfully");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Container isProcessing={isProcessing}>
      <KeyboardAvoidingView
        behavior="height"
        style={{ flex: 1 }}
        keyboardVerticalOffset={100}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ gap: 10, padding: 10 }}
        >
          <TextInput
            label="Product Name"
            placeholder="Enter product name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            label="SKU"
            value={sku}
            onChangeText={setSku}
            autoCapitalize="characters"
            placeholder="Stock Keeping Unit"
          />

          <Picker.Select
            label="Category"
            autoClose={true}
            selectedValue={category}
            onValueChange={setCategory}
            containerStyle={{ height: "50%" }}
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
            containerStyle={{ minHeight: "50%", maxHeight: "70%" }}
          >
            <FlatList
              data={brands}
              keyExtractor={(brand) => brand}
              renderItem={({ item: brand }) => (
                <Picker.Item key={brand} label={brand} value={brand} />
              )}
            />
          </Picker.Select>

          <Picker.Select
            label="Unit"
            position="bottom"
            selectedValue={unit}
            onValueChange={setUnit}
            containerStyle={{ height: "50%" }}
          >
            <Picker.Item label="Piece" value="pc" />
            <Picker.Item label="Box" value="box" />
            <Picker.Item label="Packet" value="pkt" />
            <Picker.Item label="Kilogram" value="kg" />
            <Picker.Item label="Liter" value="ltr" />
            <Picker.Item label="Gram" value="g" />
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

          <Spacer size={10} />
          <Button onPress={handleSubmit}>Save Product</Button>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default AddProductScreen;
