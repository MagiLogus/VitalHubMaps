import { AgeContainer, Container, MapInformation, MapInformationContainer, TextBoxArea, TextBoxContainer, TextBoxContainerRow } from "../../components/Container/Style";
import { Map } from '../../components/Map/Style';
import { Marker } from 'react-native-maps';
import { AgeTitle, TextBoxText, TextBoxTitle, Title } from "../../components/Title/Style";
import { LinkAction } from "../../components/Links/Style";
import MapViewDirections from "react-native-maps-directions";
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, watchPositionAsync, LocationAccuracy } from "expo-location";
import { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Text } from 'react-native';
import { mapskey } from "../../../Utils/mapsApiKey";

export const ConsultationLocal = () => {
  const mapReference = useRef(null);

  const [initialPosition, setInitialPosition] = useState(null);

  const [finalPosition, setFinalPosition] = useState({
    latitude: -23.6902013,
    longitude: -46.5882767,
  });

  async function CatchLocalization() {
    const { granted } = await requestForegroundPermissionsAsync()

    if (granted) {
      const captureLocation = await getCurrentPositionAsync()

      setInitialPosition(captureLocation)

      console.log(initialPosition);
    }
  }

  useEffect(() => {
    CatchLocalization()
    watchPositionAsync({
      accuracy: LocationAccuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 1,
    }, async (response) => {
      await setInitialPosition(response)
      mapReference.current?.animateCamera({
        pitch: 60,
        center: response.coords
      })
      console.log(response);
    })
  }, [1000])

  useEffect(() => {
    RechargeVisuzualization()
  }, [initialPosition])

  async function RechargeVisuzualization() {
    if (mapReference.current && initialPosition) {
      await mapReference.current.fitToCoordinates(
        [{
          latitude: initialPosition.coords.latitude,
          longitude: initialPosition.coords.longitude,
        },
        {
          latitude: finalPosition.latitude,
          longitude: finalPosition.longitude,
        }],
        {
          edgePadding: { top: 60, right: 60, left: 60, bottom: 60 },
          animated: true
        }
      )
    }
  }
  return (
    <Container>
      {
        initialPosition != null
          ? (
            <Map
              initialRegion={{
                latitude: -23.6152959,
                longitude: -46.5708332,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker
                coordinate={{
                  latitude: initialPosition.coords.latitude,
                  longitude: initialPosition.coords.longitude,
                }}
                title='Origin'
                pinColor='green'
                description='AtualPosition'
              />
              <MapViewDirections
                origin={initialPosition.coords}
                destination={{
                  latitude: -23.6152959,
                  longitude: -46.5708332,
                  latitudeDelta: 0.005,
                  longitudeDelta: 0.005,
                }}
                strokeWidth={5}
                strokeColor='#496BBA'
                apikey={mapskey}
              />
              <Marker
                coordinate={{
                  latitude: -23.6152959,
                  longitude: -46.5708332,
                }}
                title="Niteroi, 180"
                description="São Caetano do Sul, São Paulo"
              />
            </Map>
          ) : (
            <>
              <Text>Not Found</Text>
              <ActivityIndicator />
            </>
          )
      }
      <MapInformation>
        <MapInformationContainer>
          <Title>Clínica Natureh</Title>
          <AgeContainer>
            <AgeTitle>São Paulo, SP</AgeTitle>
          </AgeContainer>
          <TextBoxContainer>
            <TextBoxTitle>Endereço:</TextBoxTitle>
            <TextBoxArea>
              <TextBoxText>Rua: Niteroi</TextBoxText>
            </TextBoxArea>
          </TextBoxContainer>
          <TextBoxContainerRow>
            <TextBoxContainer fieldWidth={45}>
              <TextBoxTitle>Número:</TextBoxTitle>
              <TextBoxArea >
                <TextBoxText>180</TextBoxText>
              </TextBoxArea>
            </TextBoxContainer>
            <TextBoxContainer fieldWidth={50}>
              <TextBoxTitle>Bairro:</TextBoxTitle>
              <TextBoxArea >
                <TextBoxText>São Caetano-SP</TextBoxText>
              </TextBoxArea>
            </TextBoxContainer>
          </TextBoxContainerRow>
          <LinkAction>Voltar</LinkAction>
        </MapInformationContainer>
      </MapInformation>
    </Container>
  );
};

