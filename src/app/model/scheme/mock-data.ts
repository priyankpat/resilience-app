export const Location = {
  address: "",
  lat: 0,
  long: 0,
  label: "",
};

export const Organization = {
  name: "",
  uid: "",
  location: {
    address: "",
    lat: 0,
    long: 0,
    label: "",
  },
};

export const User = {
  uid: "",
  phone: 0,
  name: "",
  organizationId: 0,
  isVolunteer: false,
  isOrganizer: false,
  location: {
    address: "",
    lat: 0,
    long: 0,
    label: "",
  },
  volunteerDetails: {
    hasCar: false,
  },
  organizerDetails: {},
};

export const TimeWindow = {
  timeWindowType: "morning",
};

export const Mission = {
  uid: "",
  type: "foodbox",
  status: "unassigned",
  fundedStatus: "fundingnotneeded",
  payableStatus: "notacquired",
  tentativeVolunterId: "",
  volunteerId: "",
  missionlog: [],
  organisationId: "",
  details: {
    title: "",
    description: "",
    url: "",
    notes: "",
    privateNotes: "",
    pickUp: {
      location: {
        address: "",
        lat: 0,
        long: 0,
        label: "",
      },
    },
    dropOff: {
      deliveryWindow: {
        timeWindowType: "morning",
      },
      location: {
        address: "",
        lat: 0,
        long: 0,
        label: "",
      },
    },
    deliveryConfirmation: {
      imageUrl: "",
      deliveryNotes: "",
    },
    feedback: {
      missionAccepted: false,
      notes: "",
    },
    recipient: {
      recipientId: "",
    },
  },
};

export const MissionLogEvent = {
  userId: "",
  action: "",
  actionDetail: "",
  fieldName: "",
};
