import gql from "graphql-tag"

import * as ApolloReactCommon from "@apollo/client"
import * as ApolloReactHooks from "@apollo/client"
export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string
    String: string
    Boolean: boolean
    Int: number
    Float: number
    DateTime: any
    Upload: any
}

export type Account = {
    __typename?: "Account"
    id: Scalars["String"]
}

export type AccountData = {
    __typename?: "AccountData"
    url: Scalars["String"]
    balanceTransactions?: Maybe<Array<BalanceTransaction>>
}

export type Activity = {
    __typename?: "Activity"
    id: Scalars["String"]
    name: Scalars["String"]
    category: Array<Scalars["String"]>
    collection: Array<Scalars["String"]>
    about: Scalars["String"]
    maxCapacity: Scalars["Int"]
    price: Scalars["Int"]
    priceUnit: Scalars["String"]
    duration: Scalars["Int"]
    generalNotice?: Maybe<Scalars["String"]>
    searchTags: Array<Scalars["String"]>
    createdAt: Scalars["DateTime"]
    updatedAt?: Maybe<Scalars["DateTime"]>
    deletedAt?: Maybe<Scalars["DateTime"]>
    listing: Listing
    bookings?: Maybe<Array<Booking>>
    activityFiles: Array<ActivityFile>
}

export type ActivityFile = {
    __typename?: "ActivityFile"
    id: Scalars["String"]
    filename: Scalars["String"]
    mimetype: Scalars["String"]
    encoding: Scalars["String"]
    size: Scalars["Float"]
    activity: Activity
}

export type ActivityFileData = {
    id: Scalars["String"]
    filename: Scalars["String"]
    mimetype?: Maybe<Scalars["String"]>
    encoding?: Maybe<Scalars["String"]>
    size: Scalars["Float"]
}

export type BalanceTransaction = {
    __typename?: "BalanceTransaction"
    id: Scalars["String"]
    amount: Scalars["Int"]
    available_on: Scalars["Int"]
    created: Scalars["Int"]
    currency: Scalars["String"]
}

export type Booking = {
    __typename?: "Booking"
    id: Scalars["String"]
    bookingForDate: Scalars["DateTime"]
    price: Scalars["Int"]
    quantity: Scalars["Int"]
    statusCode: Scalars["Int"]
    eTenderId: Scalars["String"]
    createdAt: Scalars["DateTime"]
    updatedAt?: Maybe<Scalars["DateTime"]>
    deletedAt?: Maybe<Scalars["DateTime"]>
    listing: Listing
    activity: Activity
    partner: User
    business: User
    invitedUsers?: Maybe<Array<User>>
    goingUsers?: Maybe<Array<User>>
}

export type CardPaymentMethodDetails = {
    __typename?: "CardPaymentMethodDetails"
    brand: Scalars["String"]
    exp_month: Scalars["Int"]
    exp_year: Scalars["Int"]
    last4: Scalars["String"]
}

export type Customer = {
    __typename?: "Customer"
    defaultPaymentMethod?: Maybe<Scalars["String"]>
    paymentMethods: Array<PaymentMethodDetails>
}

export type DemoRequest = {
    __typename?: "DemoRequest"
    done: Scalars["Boolean"]
}

export type Listing = {
    __typename?: "Listing"
    id: Scalars["String"]
    name: Scalars["String"]
    about: Scalars["String"]
    phoneNumber?: Maybe<Scalars["String"]>
    website: Scalars["String"]
    searchTags: Array<Scalars["String"]>
    createdAt: Scalars["DateTime"]
    updatedAt?: Maybe<Scalars["DateTime"]>
    deletedAt?: Maybe<Scalars["DateTime"]>
    partner: User
    activities?: Maybe<Array<Activity>>
    openings: Array<Opening>
    location: Location
    bookings?: Maybe<Array<Booking>>
}

export type Location = {
    __typename?: "Location"
    id: Scalars["String"]
    lat: Scalars["Float"]
    lng: Scalars["Float"]
    radius?: Maybe<Scalars["Int"]>
    addressLine1?: Maybe<Scalars["String"]>
    addressLine2?: Maybe<Scalars["String"]>
    postCode?: Maybe<Scalars["String"]>
    city?: Maybe<Scalars["String"]>
    createdAt: Scalars["DateTime"]
    updatedAt?: Maybe<Scalars["DateTime"]>
    deletedAt?: Maybe<Scalars["DateTime"]>
}

export type Mutation = {
    __typename?: "Mutation"
    addActivity: Activity
    updateActivity: Activity
    deleteActivity: Activity
    addBooking: Booking
    addBookingsBulk: Array<Booking>
    updateBooking: Booking
    setGoingStatus: User
    deleteBooking: Booking
    addDemoRequest: DemoRequest
    addListing: Listing
    updateListing: Listing
    deleteListing: Listing
    addOffice: Office
    updateOffice: Office
    deleteOffice: Office
    completeConnectAccountSetup: Account
    setVATRegistered: Account
    attachPaymentMethod: PaymentMethodDetails
    detachPaymentMethod: PaymentMethodDetails
    addTeam: Team
    updateTeam: Team
    deleteTeam: Team
    getUsers: Array<User>
    addAdminUser: User
    addBusinessUser: User
    addEmployeeUser: User
    addPartnerUser: User
    updateUser: User
    setUserOffices: User
    setEmployeeTeams: User
    setFreelancer: User
    deleteUser: User
}

export type MutationAddActivityArgs = {
    newActivityData: NewActivityData
    listingId: Scalars["String"]
}

export type MutationUpdateActivityArgs = {
    updatedActivityData: UpdateActivityData
    activityId: Scalars["String"]
}

export type MutationDeleteActivityArgs = {
    activityId: Scalars["String"]
}

export type MutationAddBookingArgs = {
    newBookingData: NewBookingData
    activityId: Scalars["String"]
}

export type MutationAddBookingsBulkArgs = {
    newBookingData: NewBookingData
    activityIds: Array<Scalars["String"]>
}

export type MutationUpdateBookingArgs = {
    updatedBookingData: UpdateBookingData
    bookingId: Scalars["String"]
}

export type MutationSetGoingStatusArgs = {
    goingStatus: Scalars["Boolean"]
    userId: Scalars["String"]
    bookingId: Scalars["String"]
}

export type MutationDeleteBookingArgs = {
    bookingId: Scalars["String"]
}

export type MutationAddDemoRequestArgs = {
    newDemoRequestData: NewDemoRequestData
}

export type MutationAddListingArgs = {
    newListingData: NewListingData
    partnerId: Scalars["String"]
}

export type MutationUpdateListingArgs = {
    updatedListingData: UpdateListingData
    listingId: Scalars["String"]
}

export type MutationDeleteListingArgs = {
    listingId: Scalars["String"]
}

export type MutationAddOfficeArgs = {
    newOfficeData: NewOfficeData
    businessId: Scalars["String"]
}

export type MutationUpdateOfficeArgs = {
    updatedOfficeData: UpdateOfficeData
    officeId: Scalars["String"]
}

export type MutationDeleteOfficeArgs = {
    officeId: Scalars["String"]
}

export type MutationCompleteConnectAccountSetupArgs = {
    tokenCode: Scalars["String"]
    partnerId: Scalars["String"]
}

export type MutationSetVatRegisteredArgs = {
    vatRegistered: Scalars["Boolean"]
    partnerId: Scalars["String"]
}

export type MutationAttachPaymentMethodArgs = {
    payment_method: Scalars["String"]
    businessId: Scalars["String"]
}

export type MutationDetachPaymentMethodArgs = {
    payment_method: Scalars["String"]
    businessId: Scalars["String"]
}

export type MutationAddTeamArgs = {
    newTeamData: NewTeamData
    businessId: Scalars["String"]
}

export type MutationUpdateTeamArgs = {
    updatedTeamData: UpdateTeamData
    teamId: Scalars["String"]
}

export type MutationDeleteTeamArgs = {
    teamId: Scalars["String"]
}

export type MutationGetUsersArgs = {
    sequelizeQueryString: Scalars["String"]
}

export type MutationAddAdminUserArgs = {
    newAdminUserData: NewAdminUserData
}

export type MutationAddBusinessUserArgs = {
    newBusinessUserData: NewBusinessUserData
}

export type MutationAddEmployeeUserArgs = {
    newEmployeeUserData: NewEmployeeUserData
    businessId: Scalars["String"]
}

export type MutationAddPartnerUserArgs = {
    newPartnerUserData: NewPartnerUserData
}

export type MutationUpdateUserArgs = {
    updatedUserData: UpdateUserData
    userId: Scalars["String"]
}

export type MutationSetUserOfficesArgs = {
    offices: Array<UpdatableOfficeInput>
    businessId: Scalars["String"]
}

export type MutationSetEmployeeTeamsArgs = {
    teamIds: Array<Scalars["String"]>
    userId: Scalars["String"]
}

export type MutationSetFreelancerArgs = {
    freelancer: Scalars["Boolean"]
    userId: Scalars["String"]
}

export type MutationDeleteUserArgs = {
    userId: Scalars["String"]
}

export type NewActivityData = {
    name: Scalars["String"]
    category: Array<Scalars["String"]>
    collection: Array<Scalars["String"]>
    about: Scalars["String"]
    maxCapacity: Scalars["Int"]
    price: Scalars["Int"]
    priceUnit: Scalars["String"]
    uploadedFiles: Array<Scalars["Upload"]>
    duration: Scalars["Int"]
    generalNotice?: Maybe<Scalars["String"]>
    searchTags: Array<Scalars["String"]>
}

export type NewAdminUserData = {
    email: Scalars["String"]
    displayName: Scalars["String"]
    allowEmail: Scalars["Boolean"]
}

export type NewBookingData = {
    bookingForDate: Scalars["DateTime"]
    quantity: Scalars["Int"]
}

export type NewBusinessUserData = {
    displayName: Scalars["String"]
    allowEmail: Scalars["Boolean"]
    photo: Scalars["Upload"]
}

export type NewDemoRequestData = {
    email: Scalars["String"]
    name: Scalars["String"]
}

export type NewEmployeeUserData = {
    email: Scalars["String"]
    displayName: Scalars["String"]
    allowEmail: Scalars["Boolean"]
    teamIds: Array<Scalars["String"]>
}

export type NewListingData = {
    name: Scalars["String"]
    about: Scalars["String"]
    phoneNumber?: Maybe<Scalars["String"]>
    website: Scalars["String"]
    searchTags: Array<Scalars["String"]>
    location: NewLocationData
    openings: Array<NewOpeningData>
}

export type NewLocationData = {
    lat: Scalars["Float"]
    lng: Scalars["Float"]
    radius?: Maybe<Scalars["Int"]>
    addressLine1?: Maybe<Scalars["String"]>
    addressLine2?: Maybe<Scalars["String"]>
    postCode?: Maybe<Scalars["String"]>
    city?: Maybe<Scalars["String"]>
}

export type NewOfficeData = {
    name: Scalars["String"]
    location: NewLocationData
}

export type NewOpeningData = {
    openTime: Scalars["Int"]
    closeTime: Scalars["Int"]
}

export type NewPartnerUserData = {
    displayName: Scalars["String"]
    freelancer: Scalars["Boolean"]
    allowEmail: Scalars["Boolean"]
    photo: Scalars["Upload"]
}

export type NewTeamData = {
    teamName: Scalars["String"]
}

export type Office = {
    __typename?: "Office"
    id: Scalars["String"]
    name: Scalars["String"]
    business: User
    location: Location
}

export type Opening = {
    __typename?: "Opening"
    id: Scalars["String"]
    openTime: Scalars["Int"]
    closeTime: Scalars["Int"]
    createdAt: Scalars["DateTime"]
    updatedAt?: Maybe<Scalars["DateTime"]>
    deletedAt?: Maybe<Scalars["DateTime"]>
    listing: Listing
}

export type PaymentIntent = {
    __typename?: "PaymentIntent"
    amount: Scalars["Int"]
    client_secret: Scalars["String"]
    currency: Scalars["String"]
}

export type PaymentMethodDetails = {
    __typename?: "PaymentMethodDetails"
    id: Scalars["String"]
    card: CardPaymentMethodDetails
    name: Scalars["String"]
}

export type Query = {
    __typename?: "Query"
    getActivities: Array<Activity>
    getBookings: Array<Booking>
    getListings: Array<Listing>
    getLocations: Array<Location>
    getOffices: Array<Office>
    getOpenings: Array<Opening>
    getAccountDashboard: AccountData
    getSetupIntentClientSecret: SetupIntent
    getStripeCustomer: Customer
    getPaymentIntent: PaymentIntent
    getTeams: Array<Team>
    getUsers: Array<User>
}

export type QueryGetActivitiesArgs = {
    sequelizeQueryString: Scalars["String"]
}

export type QueryGetBookingsArgs = {
    sequelizeQueryString: Scalars["String"]
}

export type QueryGetListingsArgs = {
    sequelizeQueryString: Scalars["String"]
}

export type QueryGetLocationsArgs = {
    sequelizeQueryString: Scalars["String"]
}

export type QueryGetOfficesArgs = {
    sequelizeQueryString: Scalars["String"]
}

export type QueryGetOpeningsArgs = {
    sequelizeQueryString: Scalars["String"]
}

export type QueryGetAccountDashboardArgs = {
    partnerId: Scalars["String"]
}

export type QueryGetStripeCustomerArgs = {
    businessId: Scalars["String"]
}

export type QueryGetPaymentIntentArgs = {
    paymentMethodId: Scalars["String"]
    bookingId: Scalars["String"]
}

export type QueryGetTeamsArgs = {
    sequelizeQueryString: Scalars["String"]
}

export type QueryGetUsersArgs = {
    sequelizeQueryString: Scalars["String"]
}

export type SetupIntent = {
    __typename?: "SetupIntent"
    client_secret: Scalars["String"]
}

export type Team = {
    __typename?: "Team"
    id: Scalars["String"]
    teamName: Scalars["String"]
    createdAt: Scalars["DateTime"]
    updatedAt?: Maybe<Scalars["DateTime"]>
    deletedAt?: Maybe<Scalars["DateTime"]>
    teamOwner: User
    users?: Maybe<Array<User>>
}

export type UpdatableOfficeInput = {
    id?: Maybe<Scalars["String"]>
    name?: Maybe<Scalars["String"]>
    location?: Maybe<NewLocationData>
}

export type UpdateActivityData = {
    name?: Maybe<Scalars["String"]>
    category?: Maybe<Array<Scalars["String"]>>
    collection?: Maybe<Array<Scalars["String"]>>
    about?: Maybe<Scalars["String"]>
    maxCapacity?: Maybe<Scalars["Int"]>
    price?: Maybe<Scalars["Int"]>
    priceUnit?: Maybe<Scalars["String"]>
    uploadedFiles?: Maybe<Array<Scalars["Upload"]>>
    existingFiles?: Maybe<Array<ActivityFileData>>
    duration?: Maybe<Scalars["Int"]>
    generalNotice?: Maybe<Scalars["String"]>
    searchTags?: Maybe<Array<Scalars["String"]>>
}

export type UpdateBookingData = {
    bookingForDate?: Maybe<Scalars["DateTime"]>
    statusCode?: Maybe<Scalars["Int"]>
}

export type UpdateListingData = {
    name?: Maybe<Scalars["String"]>
    about?: Maybe<Scalars["String"]>
    phoneNumber?: Maybe<Scalars["String"]>
    website?: Maybe<Scalars["String"]>
    searchTags?: Maybe<Array<Scalars["String"]>>
    location?: Maybe<NewLocationData>
    openings?: Maybe<Array<NewOpeningData>>
}

export type UpdateOfficeData = {
    name?: Maybe<Scalars["String"]>
    location?: Maybe<NewLocationData>
}

export type UpdateTeamData = {
    teamName: Scalars["String"]
}

export type UpdateUserData = {
    allowEmail?: Maybe<Scalars["Boolean"]>
    displayName?: Maybe<Scalars["String"]>
    photo?: Maybe<Scalars["Upload"]>
}

export type User = {
    __typename?: "User"
    id: Scalars["String"]
    allowEmail: Scalars["Boolean"]
    stripeCustomerId?: Maybe<Scalars["String"]>
    stripeConnectId?: Maybe<Scalars["String"]>
    freelancer?: Maybe<Scalars["Boolean"]>
    createdAt: Scalars["DateTime"]
    updatedAt?: Maybe<Scalars["DateTime"]>
    deletedAt?: Maybe<Scalars["DateTime"]>
    employees?: Maybe<Array<User>>
    business?: Maybe<User>
    ownedTeams?: Maybe<Array<Team>>
    listings?: Maybe<Array<Listing>>
    bookingRequests?: Maybe<Array<Booking>>
    requestedBookings?: Maybe<Array<Booking>>
    teams?: Maybe<Array<Team>>
    officesOwned?: Maybe<Array<Office>>
    invitesReceived?: Maybe<Array<Booking>>
    invitesAccepted?: Maybe<Array<Booking>>
    role: Scalars["String"]
    displayName: Scalars["String"]
    email: Scalars["String"]
    emailVerified: Scalars["String"]
    photoURL?: Maybe<Scalars["String"]>
    VATRegistered?: Maybe<Scalars["Int"]>
}

export type GetListingsQueryVariables = {
    sequelizeString: Scalars["String"]
}

export type GetListingsQuery = { __typename?: "Query" } & { getListings: Array<{ __typename?: "Listing" } & Pick<Listing, "id">> }

export type UpdateActivityAddActivityFormMutationVariables = {
    activityId: Scalars["String"]
    updatedActivityData: UpdateActivityData
}

export type UpdateActivityAddActivityFormMutation = { __typename?: "Mutation" } & { updateActivity: { __typename?: "Activity" } & Pick<Activity, "id"> }

export const GetListingsDocument = gql`
    query getListings($sequelizeString: String!) {
        getListings(sequelizeQueryString: $sequelizeString) {
            id
        }
    }
`

/**
 * __useGetListingsQuery__
 *
 * To run a query within a React component, call `useGetListingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListingsQuery({
 *   variables: {
 *      sequelizeString: // value for 'sequelizeString'
 *   },
 * });
 */
export function useGetListingsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetListingsQuery, GetListingsQueryVariables>) {
    return ApolloReactHooks.useQuery<GetListingsQuery, GetListingsQueryVariables>(GetListingsDocument, baseOptions)
}
export function useGetListingsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetListingsQuery, GetListingsQueryVariables>) {
    return ApolloReactHooks.useLazyQuery<GetListingsQuery, GetListingsQueryVariables>(GetListingsDocument, baseOptions)
}
export type GetListingsQueryHookResult = ReturnType<typeof useGetListingsQuery>
export type GetListingsLazyQueryHookResult = ReturnType<typeof useGetListingsLazyQuery>
export type GetListingsQueryResult = ApolloReactCommon.QueryResult<GetListingsQuery, GetListingsQueryVariables>
export const UpdateActivityAddActivityFormDocument = gql`
    mutation updateActivityAddActivityForm($activityId: String!, $updatedActivityData: UpdateActivityData!) {
        updateActivity(activityId: $activityId, updatedActivityData: $updatedActivityData) {
            id
        }
    }
`
export type UpdateActivityAddActivityFormMutationFn = ApolloReactCommon.MutationFunction<
    UpdateActivityAddActivityFormMutation,
    UpdateActivityAddActivityFormMutationVariables
>

/**
 * __useUpdateActivityAddActivityFormMutation__
 *
 * To run a mutation, you first call `useUpdateActivityAddActivityFormMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateActivityAddActivityFormMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateActivityAddActivityFormMutation, { data, loading, error }] = useUpdateActivityAddActivityFormMutation({
 *   variables: {
 *      activityId: // value for 'activityId'
 *      updatedActivityData: // value for 'updatedActivityData'
 *   },
 * });
 */
export function useUpdateActivityAddActivityFormMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateActivityAddActivityFormMutation, UpdateActivityAddActivityFormMutationVariables>
) {
    return ApolloReactHooks.useMutation<UpdateActivityAddActivityFormMutation, UpdateActivityAddActivityFormMutationVariables>(
        UpdateActivityAddActivityFormDocument,
        baseOptions
    )
}
export type UpdateActivityAddActivityFormMutationHookResult = ReturnType<typeof useUpdateActivityAddActivityFormMutation>
export type UpdateActivityAddActivityFormMutationResult = ApolloReactCommon.MutationResult<UpdateActivityAddActivityFormMutation>
export type UpdateActivityAddActivityFormMutationOptions = ApolloReactCommon.BaseMutationOptions<
    UpdateActivityAddActivityFormMutation,
    UpdateActivityAddActivityFormMutationVariables
>
