const Event = use('Event');
const Mqtt = use('Mqtt');

// Listen to some Events of the library
Event.on('MQTT:Connected', 'Test.subscription')
// Event.on('MQTT:Disconnected', 'Test.disconnected')