import type {ValueOf} from 'type-fest';
import type CONST from '@src/CONST';
import type {EmptyObject} from '@src/types/utils/EmptyObject';
import type * as Parameters from './parameters';
import type SignInUserParams from './parameters/SignInUserParams';
import type UpdateBeneficialOwnersForBankAccountParams from './parameters/UpdateBeneficialOwnersForBankAccountParams';

type ApiRequest = ValueOf<typeof CONST.API_REQUEST_TYPE>;

const WRITE_COMMANDS = {
    SET_WORKSPACE_AUTO_REPORTING: 'SetWorkspaceAutoReporting',
    SET_WORKSPACE_AUTO_REPORTING_FREQUENCY: 'SetWorkspaceAutoReportingFrequency',
    SET_WORKSPACE_AUTO_REPORTING_MONTHLY_OFFSET: 'UpdatePolicy',
    SET_WORKSPACE_APPROVAL_MODE: 'SetWorkspaceApprovalMode',
    SET_WORKSPACE_PAYER: 'SetWorkspacePayer',
    SET_WORKSPACE_REIMBURSEMENT: 'SetWorkspaceReimbursement',
    DISMISS_REFERRAL_BANNER: 'DismissReferralBanner',
    UPDATE_PREFERRED_LOCALE: 'UpdatePreferredLocale',
    OPEN_APP: 'OpenApp',
    RECONNECT_APP: 'ReconnectApp',
    OPEN_PROFILE: 'OpenProfile',
    HANDLE_RESTRICTED_EVENT: 'HandleRestrictedEvent',
    OPEN_REPORT: 'OpenReport',
    DELETE_PAYMENT_BANK_ACCOUNT: 'DeletePaymentBankAccount',
    UPDATE_PERSONAL_INFORMATION_FOR_BANK_ACCOUNT: 'UpdatePersonalInformationForBankAccount',
    VALIDATE_BANK_ACCOUNT_WITH_TRANSACTIONS: 'ValidateBankAccountWithTransactions',
    UPDATE_COMPANY_INFORMATION_FOR_BANK_ACCOUNT: 'UpdateCompanyInformationForBankAccount',
    UPDATE_BENEFICIAL_OWNERS_FOR_BANK_ACCOUNT: 'UpdateBeneficialOwnersForBankAccount',
    CONNECT_BANK_ACCOUNT_MANUALLY: 'ConnectBankAccountManually',
    VERIFY_IDENTITY_FOR_BANK_ACCOUNT: 'VerifyIdentityForBankAccount',
    BANK_ACCOUNT_HANDLE_PLAID_ERROR: 'BankAccount_HandlePlaidError',
    REPORT_VIRTUAL_EXPENSIFY_CARD_FRAUD: 'ReportVirtualExpensifyCardFraud',
    REQUEST_REPLACEMENT_EXPENSIFY_CARD: 'RequestReplacementExpensifyCard',
    ACTIVATE_PHYSICAL_EXPENSIFY_CARD: 'ActivatePhysicalExpensifyCard',
    CHRONOS_REMOVE_OOO_EVENT: 'Chronos_RemoveOOOEvent',
    MAKE_DEFAULT_PAYMENT_METHOD: 'MakeDefaultPaymentMethod',
    ADD_PAYMENT_CARD: 'AddPaymentCard',
    TRANSFER_WALLET_BALANCE: 'TransferWalletBalance',
    DELETE_PAYMENT_CARD: 'DeletePaymentCard',
    UPDATE_PRONOUNS: 'UpdatePronouns',
    UPDATE_DISPLAY_NAME: 'UpdateDisplayName',
    UPDATE_LEGAL_NAME: 'UpdateLegalName',
    UPDATE_DATE_OF_BIRTH: 'UpdateDateOfBirth',
    UPDATE_HOME_ADDRESS: 'UpdateHomeAddress',
    UPDATE_AUTOMATIC_TIMEZONE: 'UpdateAutomaticTimezone',
    UPDATE_SELECTED_TIMEZONE: 'UpdateSelectedTimezone',
    UPDATE_USER_AVATAR: 'UpdateUserAvatar',
    DELETE_USER_AVATAR: 'DeleteUserAvatar',
    REFER_TEACHERS_UNITE_VOLUNTEER: 'ReferTeachersUniteVolunteer',
    ADD_SCHOOL_PRINCIPAL: 'AddSchoolPrincipal',
    CLOSE_ACCOUNT: 'CloseAccount',
    REQUEST_CONTACT_METHOD_VALIDATE_CODE: 'RequestContactMethodValidateCode',
    UPDATE_NEWSLETTER_SUBSCRIPTION: 'UpdateNewsletterSubscription',
    DELETE_CONTACT_METHOD: 'DeleteContactMethod',
    ADD_NEW_CONTACT_METHOD: 'AddNewContactMethod',
    VALIDATE_LOGIN: 'ValidateLogin',
    VALIDATE_SECONDARY_LOGIN: 'ValidateSecondaryLogin',
    UPDATE_PREFERRED_EMOJI_SKIN_TONE: 'UpdatePreferredEmojiSkinTone',
    UPDATE_FREQUENTLY_USED_EMOJIS: 'UpdateFrequentlyUsedEmojis',
    UPDATE_CHAT_PRIORITY_MODE: 'UpdateChatPriorityMode',
    SET_CONTACT_METHOD_AS_DEFAULT: 'SetContactMethodAsDefault',
    UPDATE_THEME: 'UpdateTheme',
    UPDATE_STATUS: 'UpdateStatus',
    CLEAR_STATUS: 'ClearStatus',
    UPDATE_PERSONAL_DETAILS_FOR_WALLET: 'UpdatePersonalDetailsForWallet',
    VERIFY_IDENTITY: 'VerifyIdentity',
    ACCEPT_WALLET_TERMS: 'AcceptWalletTerms',
    ANSWER_QUESTIONS_FOR_WALLET: 'AnswerQuestionsForWallet',
    REQUEST_PHYSICAL_EXPENSIFY_CARD: 'RequestPhysicalExpensifyCard',
    LOG_OUT: 'LogOut',
    REQUEST_ACCOUNT_VALIDATION_LINK: 'RequestAccountValidationLink',
    REQUEST_NEW_VALIDATE_CODE: 'RequestNewValidateCode',
    SIGN_IN_WITH_APPLE: 'SignInWithApple',
    SIGN_IN_WITH_GOOGLE: 'SignInWithGoogle',
    SIGN_IN_USER: 'SigninUser',
    SIGN_IN_USER_WITH_LINK: 'SigninUserWithLink',
    REQUEST_UNLINK_VALIDATION_LINK: 'RequestUnlinkValidationLink',
    UNLINK_LOGIN: 'UnlinkLogin',
    ENABLE_TWO_FACTOR_AUTH: 'EnableTwoFactorAuth',
    DISABLE_TWO_FACTOR_AUTH: 'DisableTwoFactorAuth',
    TWO_FACTOR_AUTH_VALIDATE: 'TwoFactorAuth_Validate',
    ADD_COMMENT: 'AddComment',
    ADD_ATTACHMENT: 'AddAttachment',
    CONNECT_BANK_ACCOUNT_WITH_PLAID: 'ConnectBankAccountWithPlaid',
    ADD_PERSONAL_BANK_ACCOUNT: 'AddPersonalBankAccount',
    RESTART_BANK_ACCOUNT_SETUP: 'RestartBankAccountSetup',
    OPT_IN_TO_PUSH_NOTIFICATIONS: 'OptInToPushNotifications',
    OPT_OUT_OF_PUSH_NOTIFICATIONS: 'OptOutOfPushNotifications',
    RECONNECT_TO_REPORT: 'ReconnectToReport',
    READ_NEWEST_ACTION: 'ReadNewestAction',
    MARK_AS_UNREAD: 'MarkAsUnread',
    TOGGLE_PINNED_CHAT: 'TogglePinnedChat',
    DELETE_COMMENT: 'DeleteComment',
    UPDATE_COMMENT: 'UpdateComment',
    UPDATE_REPORT_NOTIFICATION_PREFERENCE: 'UpdateReportNotificationPreference',
    UPDATE_ROOM_VISIBILITY: 'UpdateRoomVisibility',
    UPDATE_ROOM_DESCRIPTION: 'UpdateRoomDescription',
    UPDATE_REPORT_WRITE_CAPABILITY: 'UpdateReportWriteCapability',
    ADD_WORKSPACE_ROOM: 'AddWorkspaceRoom',
    UPDATE_POLICY_ROOM_NAME: 'UpdatePolicyRoomName',
    ADD_EMOJI_REACTION: 'AddEmojiReaction',
    REMOVE_EMOJI_REACTION: 'RemoveEmojiReaction',
    LEAVE_ROOM: 'LeaveRoom',
    INVITE_TO_ROOM: 'InviteToRoom',
    REMOVE_FROM_ROOM: 'RemoveFromRoom',
    FLAG_COMMENT: 'FlagComment',
    UPDATE_REPORT_PRIVATE_NOTE: 'UpdateReportPrivateNote',
    RESOLVE_ACTIONABLE_MENTION_WHISPER: 'ResolveActionableMentionWhisper',
    DELETE_WORKSPACE: 'DeleteWorkspace',
    DELETE_MEMBERS_FROM_WORKSPACE: 'DeleteMembersFromWorkspace',
    ADD_MEMBERS_TO_WORKSPACE: 'AddMembersToWorkspace',
    UPDATE_WORKSPACE_AVATAR: 'UpdateWorkspaceAvatar',
    DELETE_WORKSPACE_AVATAR: 'DeleteWorkspaceAvatar',
    UPDATE_WORKSPACE_GENERAL_SETTINGS: 'UpdateWorkspaceGeneralSettings',
    UPDATE_WORKSPACE_CUSTOM_UNIT_AND_RATE: 'UpdateWorkspaceCustomUnitAndRate',
    UPDATE_WORKSPACE_DESCRIPTION: 'UpdateWorkspaceDescription',
    UPDATE_WORKSPACE_MEMBERS_ROLE: 'UpdateWorkspaceMembersRole',
    CREATE_WORKSPACE: 'CreateWorkspace',
    CREATE_WORKSPACE_FROM_IOU_PAYMENT: 'CreateWorkspaceFromIOUPayment',
    SET_WORKSPACE_CATEGORIES_ENABLED: 'SetWorkspaceCategoriesEnabled',
    SET_POLICY_TAGS_ENABLED: 'SetPolicyTagsEnabled',
    CREATE_WORKSPACE_CATEGORIES: 'CreateWorkspaceCategories',
    RENAME_WORKSPACE_CATEGORY: 'RenameWorkspaceCategory',
    CREATE_POLICY_TAG: 'CreatePolicyTag',
    SET_WORKSPACE_REQUIRES_CATEGORY: 'SetWorkspaceRequiresCategory',
    DELETE_WORKSPACE_CATEGORIES: 'DeleteWorkspaceCategories',
    SET_POLICY_REQUIRES_TAG: 'SetPolicyRequiresTag',
    RENAME_POLICY_TAG_LIST: 'RenamePolicyTaglist',
    CREATE_TASK: 'CreateTask',
    CANCEL_TASK: 'CancelTask',
    EDIT_TASK_ASSIGNEE: 'EditTaskAssignee',
    EDIT_TASK: 'EditTask',
    REOPEN_TASK: 'ReopenTask',
    COMPLETE_TASK: 'CompleteTask',
    COMPLETE_ENGAGEMENT_MODAL: 'CompleteEngagementModal',
    SET_NAME_VALUE_PAIR: 'SetNameValuePair',
    SET_REPORT_FIELD: 'Report_SetFields',
    SET_REPORT_NAME: 'RenameReport',
    COMPLETE_SPLIT_BILL: 'CompleteSplitBill',
    UPDATE_MONEY_REQUEST_DATE: 'UpdateMoneyRequestDate',
    UPDATE_MONEY_REQUEST_BILLABLE: 'UpdateMoneyRequestBillable',
    UPDATE_MONEY_REQUEST_MERCHANT: 'UpdateMoneyRequestMerchant',
    UPDATE_MONEY_REQUEST_TAG: 'UpdateMoneyRequestTag',
    UPDATE_MONEY_REQUEST_DISTANCE: 'UpdateMoneyRequestDistance',
    UPDATE_MONEY_REQUEST_CATEGORY: 'UpdateMoneyRequestCategory',
    UPDATE_MONEY_REQUEST_DESCRIPTION: 'UpdateMoneyRequestDescription',
    UPDATE_MONEY_REQUEST_AMOUNT_AND_CURRENCY: 'UpdateMoneyRequestAmountAndCurrency',
    HOLD_MONEY_REQUEST: 'HoldRequest',
    UNHOLD_MONEY_REQUEST: 'UnHoldRequest',
    UPDATE_DISTANCE_REQUEST: 'UpdateDistanceRequest',
    REQUEST_MONEY: 'RequestMoney',
    SPLIT_BILL: 'SplitBill',
    SPLIT_BILL_AND_OPEN_REPORT: 'SplitBillAndOpenReport',
    DELETE_MONEY_REQUEST: 'DeleteMoneyRequest',
    CREATE_DISTANCE_REQUEST: 'CreateDistanceRequest',
    START_SPLIT_BILL: 'StartSplitBill',
    SEND_MONEY_ELSEWHERE: 'SendMoneyElsewhere',
    SEND_MONEY_WITH_WALLET: 'SendMoneyWithWallet',
    APPROVE_MONEY_REQUEST: 'ApproveMoneyRequest',
    EDIT_MONEY_REQUEST: 'EditMoneyRequest',
    REPLACE_RECEIPT: 'ReplaceReceipt',
    SUBMIT_REPORT: 'SubmitReport',
    DETACH_RECEIPT: 'DetachReceipt',
    PAY_MONEY_REQUEST_WITH_WALLET: 'PayMoneyRequestWithWallet',
    PAY_MONEY_REQUEST: 'PayMoneyRequest',
    CANCEL_PAYMENT: 'CancelPayment',
    ACCEPT_ACH_CONTRACT_FOR_BANK_ACCOUNT: 'AcceptACHContractForBankAccount',
    SWITCH_TO_OLD_DOT: 'SwitchToOldDot',
    ENABLE_POLICY_CATEGORIES: 'EnablePolicyCategories',
    ENABLE_POLICY_CONNECTIONS: 'EnablePolicyConnections',
    ENABLE_POLICY_DISTANCE_RATES: 'EnablePolicyDistanceRates',
    ENABLE_POLICY_TAGS: 'EnablePolicyTags',
    ENABLE_POLICY_TAXES: 'EnablePolicyTaxes',
    ENABLE_POLICY_WORKFLOWS: 'EnablePolicyWorkflows',
    ENABLE_POLICY_REPORT_FIELDS: 'EnablePolicyReportFields',
    JOIN_POLICY_VIA_INVITE_LINK: 'JoinWorkspaceViaInviteLink',
    ACCEPT_JOIN_REQUEST: 'AcceptJoinRequest',
    DECLINE_JOIN_REQUEST: 'DeclineJoinRequest',
    CREATE_POLICY_DISTANCE_RATE: 'CreatePolicyDistanceRate',
} as const;

type WriteCommand = ValueOf<typeof WRITE_COMMANDS>;

type WriteCommandParameters = {
    [WRITE_COMMANDS.DISMISS_REFERRAL_BANNER]: Parameters.DismissReferralBannerParams;
    [WRITE_COMMANDS.UPDATE_PREFERRED_LOCALE]: Parameters.UpdatePreferredLocaleParams;
    [WRITE_COMMANDS.RECONNECT_APP]: Parameters.ReconnectAppParams;
    [WRITE_COMMANDS.OPEN_APP]: Parameters.OpenAppParams;
    [WRITE_COMMANDS.OPEN_PROFILE]: Parameters.OpenProfileParams;
    [WRITE_COMMANDS.HANDLE_RESTRICTED_EVENT]: Parameters.HandleRestrictedEventParams;
    [WRITE_COMMANDS.OPEN_REPORT]: Parameters.OpenReportParams;
    [WRITE_COMMANDS.DELETE_PAYMENT_BANK_ACCOUNT]: Parameters.DeletePaymentBankAccountParams;
    [WRITE_COMMANDS.UPDATE_PERSONAL_INFORMATION_FOR_BANK_ACCOUNT]: Parameters.UpdatePersonalInformationForBankAccountParams;
    [WRITE_COMMANDS.VALIDATE_BANK_ACCOUNT_WITH_TRANSACTIONS]: Parameters.ValidateBankAccountWithTransactionsParams;
    [WRITE_COMMANDS.UPDATE_COMPANY_INFORMATION_FOR_BANK_ACCOUNT]: Parameters.UpdateCompanyInformationForBankAccountParams;
    [WRITE_COMMANDS.UPDATE_BENEFICIAL_OWNERS_FOR_BANK_ACCOUNT]: UpdateBeneficialOwnersForBankAccountParams;
    [WRITE_COMMANDS.CONNECT_BANK_ACCOUNT_MANUALLY]: Parameters.ConnectBankAccountParams;
    [WRITE_COMMANDS.VERIFY_IDENTITY_FOR_BANK_ACCOUNT]: Parameters.VerifyIdentityForBankAccountParams;
    [WRITE_COMMANDS.BANK_ACCOUNT_HANDLE_PLAID_ERROR]: Parameters.BankAccountHandlePlaidErrorParams;
    [WRITE_COMMANDS.REPORT_VIRTUAL_EXPENSIFY_CARD_FRAUD]: Parameters.ReportVirtualExpensifyCardFraudParams;
    [WRITE_COMMANDS.REQUEST_REPLACEMENT_EXPENSIFY_CARD]: Parameters.RequestReplacementExpensifyCardParams;
    [WRITE_COMMANDS.ACTIVATE_PHYSICAL_EXPENSIFY_CARD]: Parameters.ActivatePhysicalExpensifyCardParams;
    [WRITE_COMMANDS.MAKE_DEFAULT_PAYMENT_METHOD]: Parameters.MakeDefaultPaymentMethodParams;
    [WRITE_COMMANDS.ADD_PAYMENT_CARD]: Parameters.AddPaymentCardParams;
    [WRITE_COMMANDS.DELETE_PAYMENT_CARD]: Parameters.DeletePaymentCardParams;
    [WRITE_COMMANDS.UPDATE_PRONOUNS]: Parameters.UpdatePronounsParams;
    [WRITE_COMMANDS.UPDATE_DISPLAY_NAME]: Parameters.UpdateDisplayNameParams;
    [WRITE_COMMANDS.UPDATE_LEGAL_NAME]: Parameters.UpdateLegalNameParams;
    [WRITE_COMMANDS.UPDATE_DATE_OF_BIRTH]: Parameters.UpdateDateOfBirthParams;
    [WRITE_COMMANDS.UPDATE_HOME_ADDRESS]: Parameters.UpdateHomeAddressParams;
    [WRITE_COMMANDS.UPDATE_AUTOMATIC_TIMEZONE]: Parameters.UpdateAutomaticTimezoneParams;
    [WRITE_COMMANDS.UPDATE_SELECTED_TIMEZONE]: Parameters.UpdateSelectedTimezoneParams;
    [WRITE_COMMANDS.UPDATE_USER_AVATAR]: Parameters.UpdateUserAvatarParams;
    [WRITE_COMMANDS.DELETE_USER_AVATAR]: EmptyObject;
    [WRITE_COMMANDS.REFER_TEACHERS_UNITE_VOLUNTEER]: Parameters.ReferTeachersUniteVolunteerParams;
    [WRITE_COMMANDS.ADD_SCHOOL_PRINCIPAL]: Parameters.AddSchoolPrincipalParams;
    [WRITE_COMMANDS.CLOSE_ACCOUNT]: Parameters.CloseAccountParams;
    [WRITE_COMMANDS.REQUEST_CONTACT_METHOD_VALIDATE_CODE]: Parameters.RequestContactMethodValidateCodeParams;
    [WRITE_COMMANDS.UPDATE_NEWSLETTER_SUBSCRIPTION]: Parameters.UpdateNewsletterSubscriptionParams;
    [WRITE_COMMANDS.DELETE_CONTACT_METHOD]: Parameters.DeleteContactMethodParams;
    [WRITE_COMMANDS.ADD_NEW_CONTACT_METHOD]: Parameters.AddNewContactMethodParams;
    [WRITE_COMMANDS.VALIDATE_LOGIN]: Parameters.ValidateLoginParams;
    [WRITE_COMMANDS.VALIDATE_SECONDARY_LOGIN]: Parameters.ValidateSecondaryLoginParams;
    [WRITE_COMMANDS.UPDATE_PREFERRED_EMOJI_SKIN_TONE]: Parameters.UpdatePreferredEmojiSkinToneParams;
    [WRITE_COMMANDS.UPDATE_FREQUENTLY_USED_EMOJIS]: Parameters.UpdateFrequentlyUsedEmojisParams;
    [WRITE_COMMANDS.UPDATE_CHAT_PRIORITY_MODE]: Parameters.UpdateChatPriorityModeParams;
    [WRITE_COMMANDS.SET_CONTACT_METHOD_AS_DEFAULT]: Parameters.SetContactMethodAsDefaultParams;
    [WRITE_COMMANDS.UPDATE_THEME]: Parameters.UpdateThemeParams;
    [WRITE_COMMANDS.UPDATE_STATUS]: Parameters.UpdateStatusParams;
    [WRITE_COMMANDS.CLEAR_STATUS]: EmptyObject;
    [WRITE_COMMANDS.UPDATE_PERSONAL_DETAILS_FOR_WALLET]: Parameters.UpdatePersonalDetailsForWalletParams;
    [WRITE_COMMANDS.VERIFY_IDENTITY]: Parameters.VerifyIdentityParams;
    [WRITE_COMMANDS.ACCEPT_WALLET_TERMS]: Parameters.AcceptWalletTermsParams;
    [WRITE_COMMANDS.ANSWER_QUESTIONS_FOR_WALLET]: Parameters.AnswerQuestionsForWalletParams;
    [WRITE_COMMANDS.REQUEST_PHYSICAL_EXPENSIFY_CARD]: Parameters.RequestPhysicalExpensifyCardParams;
    [WRITE_COMMANDS.LOG_OUT]: Parameters.LogOutParams;
    [WRITE_COMMANDS.REQUEST_ACCOUNT_VALIDATION_LINK]: Parameters.RequestAccountValidationLinkParams;
    [WRITE_COMMANDS.REQUEST_NEW_VALIDATE_CODE]: Parameters.RequestNewValidateCodeParams;
    [WRITE_COMMANDS.SIGN_IN_WITH_APPLE]: Parameters.BeginAppleSignInParams;
    [WRITE_COMMANDS.SIGN_IN_WITH_GOOGLE]: Parameters.BeginGoogleSignInParams;
    [WRITE_COMMANDS.SIGN_IN_USER]: SignInUserParams;
    [WRITE_COMMANDS.SIGN_IN_USER_WITH_LINK]: Parameters.SignInUserWithLinkParams;
    [WRITE_COMMANDS.REQUEST_UNLINK_VALIDATION_LINK]: Parameters.RequestUnlinkValidationLinkParams;
    [WRITE_COMMANDS.UNLINK_LOGIN]: Parameters.UnlinkLoginParams;
    [WRITE_COMMANDS.ENABLE_TWO_FACTOR_AUTH]: EmptyObject;
    [WRITE_COMMANDS.DISABLE_TWO_FACTOR_AUTH]: EmptyObject;
    [WRITE_COMMANDS.TWO_FACTOR_AUTH_VALIDATE]: Parameters.ValidateTwoFactorAuthParams;
    [WRITE_COMMANDS.ADD_COMMENT]: Parameters.AddCommentOrAttachementParams;
    [WRITE_COMMANDS.ADD_ATTACHMENT]: Parameters.AddCommentOrAttachementParams;
    [WRITE_COMMANDS.CONNECT_BANK_ACCOUNT_WITH_PLAID]: Parameters.ConnectBankAccountParams;
    [WRITE_COMMANDS.ADD_PERSONAL_BANK_ACCOUNT]: Parameters.AddPersonalBankAccountParams;
    [WRITE_COMMANDS.RESTART_BANK_ACCOUNT_SETUP]: Parameters.RestartBankAccountSetupParams;
    [WRITE_COMMANDS.OPT_IN_TO_PUSH_NOTIFICATIONS]: Parameters.OptInOutToPushNotificationsParams;
    [WRITE_COMMANDS.OPT_OUT_OF_PUSH_NOTIFICATIONS]: Parameters.OptInOutToPushNotificationsParams;
    [WRITE_COMMANDS.RECONNECT_TO_REPORT]: Parameters.ReconnectToReportParams;
    [WRITE_COMMANDS.READ_NEWEST_ACTION]: Parameters.ReadNewestActionParams;
    [WRITE_COMMANDS.MARK_AS_UNREAD]: Parameters.MarkAsUnreadParams;
    [WRITE_COMMANDS.TOGGLE_PINNED_CHAT]: Parameters.TogglePinnedChatParams;
    [WRITE_COMMANDS.DELETE_COMMENT]: Parameters.DeleteCommentParams;
    [WRITE_COMMANDS.UPDATE_COMMENT]: Parameters.UpdateCommentParams;
    [WRITE_COMMANDS.UPDATE_REPORT_NOTIFICATION_PREFERENCE]: Parameters.UpdateReportNotificationPreferenceParams;
    [WRITE_COMMANDS.UPDATE_ROOM_VISIBILITY]: Parameters.UpdateRoomVisibilityParams;
    [WRITE_COMMANDS.UPDATE_ROOM_DESCRIPTION]: Parameters.UpdateRoomDescriptionParams;
    [WRITE_COMMANDS.UPDATE_REPORT_WRITE_CAPABILITY]: Parameters.UpdateReportWriteCapabilityParams;
    [WRITE_COMMANDS.ADD_WORKSPACE_ROOM]: Parameters.AddWorkspaceRoomParams;
    [WRITE_COMMANDS.UPDATE_POLICY_ROOM_NAME]: Parameters.UpdatePolicyRoomNameParams;
    [WRITE_COMMANDS.ADD_EMOJI_REACTION]: Parameters.AddEmojiReactionParams;
    [WRITE_COMMANDS.REMOVE_EMOJI_REACTION]: Parameters.RemoveEmojiReactionParams;
    [WRITE_COMMANDS.LEAVE_ROOM]: Parameters.LeaveRoomParams;
    [WRITE_COMMANDS.INVITE_TO_ROOM]: Parameters.InviteToRoomParams;
    [WRITE_COMMANDS.REMOVE_FROM_ROOM]: Parameters.RemoveFromRoomParams;
    [WRITE_COMMANDS.FLAG_COMMENT]: Parameters.FlagCommentParams;
    [WRITE_COMMANDS.UPDATE_REPORT_PRIVATE_NOTE]: Parameters.UpdateReportPrivateNoteParams;
    [WRITE_COMMANDS.RESOLVE_ACTIONABLE_MENTION_WHISPER]: Parameters.ResolveActionableMentionWhisperParams;
    [WRITE_COMMANDS.CHRONOS_REMOVE_OOO_EVENT]: Parameters.ChronosRemoveOOOEventParams;
    [WRITE_COMMANDS.TRANSFER_WALLET_BALANCE]: Parameters.TransferWalletBalanceParams;
    [WRITE_COMMANDS.DELETE_WORKSPACE]: Parameters.DeleteWorkspaceParams;
    [WRITE_COMMANDS.DELETE_MEMBERS_FROM_WORKSPACE]: Parameters.DeleteMembersFromWorkspaceParams;
    [WRITE_COMMANDS.ADD_MEMBERS_TO_WORKSPACE]: Parameters.AddMembersToWorkspaceParams;
    [WRITE_COMMANDS.UPDATE_WORKSPACE_AVATAR]: Parameters.UpdateWorkspaceAvatarParams;
    [WRITE_COMMANDS.DELETE_WORKSPACE_AVATAR]: Parameters.DeleteWorkspaceAvatarParams;
    [WRITE_COMMANDS.UPDATE_WORKSPACE_GENERAL_SETTINGS]: Parameters.UpdateWorkspaceGeneralSettingsParams;
    [WRITE_COMMANDS.UPDATE_WORKSPACE_DESCRIPTION]: Parameters.UpdateWorkspaceDescriptionParams;
    [WRITE_COMMANDS.UPDATE_WORKSPACE_MEMBERS_ROLE]: Parameters.UpdateWorkspaceMembersRoleParams;
    [WRITE_COMMANDS.UPDATE_WORKSPACE_CUSTOM_UNIT_AND_RATE]: Parameters.UpdateWorkspaceCustomUnitAndRateParams;
    [WRITE_COMMANDS.CREATE_WORKSPACE]: Parameters.CreateWorkspaceParams;
    [WRITE_COMMANDS.CREATE_WORKSPACE_FROM_IOU_PAYMENT]: Parameters.CreateWorkspaceFromIOUPaymentParams;
    [WRITE_COMMANDS.SET_WORKSPACE_CATEGORIES_ENABLED]: Parameters.SetWorkspaceCategoriesEnabledParams;
    [WRITE_COMMANDS.CREATE_WORKSPACE_CATEGORIES]: Parameters.CreateWorkspaceCategoriesParams;
    [WRITE_COMMANDS.RENAME_WORKSPACE_CATEGORY]: Parameters.RenameWorkspaceCategoriesParams;
    [WRITE_COMMANDS.SET_WORKSPACE_REQUIRES_CATEGORY]: Parameters.SetWorkspaceRequiresCategoryParams;
    [WRITE_COMMANDS.DELETE_WORKSPACE_CATEGORIES]: Parameters.DeleteWorkspaceCategoriesParams;
    [WRITE_COMMANDS.SET_POLICY_REQUIRES_TAG]: Parameters.SetPolicyRequiresTag;
    [WRITE_COMMANDS.RENAME_POLICY_TAG_LIST]: Parameters.RenamePolicyTaglist;
    [WRITE_COMMANDS.CREATE_POLICY_TAG]: Parameters.CreatePolicyTagsParams;
    [WRITE_COMMANDS.SET_POLICY_TAGS_ENABLED]: Parameters.SetPolicyTagsEnabled;
    [WRITE_COMMANDS.CREATE_TASK]: Parameters.CreateTaskParams;
    [WRITE_COMMANDS.CANCEL_TASK]: Parameters.CancelTaskParams;
    [WRITE_COMMANDS.EDIT_TASK_ASSIGNEE]: Parameters.EditTaskAssigneeParams;
    [WRITE_COMMANDS.EDIT_TASK]: Parameters.EditTaskParams;
    [WRITE_COMMANDS.REOPEN_TASK]: Parameters.ReopenTaskParams;
    [WRITE_COMMANDS.COMPLETE_TASK]: Parameters.CompleteTaskParams;
    [WRITE_COMMANDS.COMPLETE_ENGAGEMENT_MODAL]: Parameters.CompleteEngagementModalParams;
    [WRITE_COMMANDS.SET_NAME_VALUE_PAIR]: Parameters.SetNameValuePairParams;
    [WRITE_COMMANDS.SET_REPORT_FIELD]: Parameters.SetReportFieldParams;
    [WRITE_COMMANDS.SET_REPORT_NAME]: Parameters.SetReportNameParams;
    [WRITE_COMMANDS.COMPLETE_SPLIT_BILL]: Parameters.CompleteSplitBillParams;
    [WRITE_COMMANDS.UPDATE_MONEY_REQUEST_DATE]: Parameters.UpdateMoneyRequestParams;
    [WRITE_COMMANDS.UPDATE_MONEY_REQUEST_MERCHANT]: Parameters.UpdateMoneyRequestParams;
    [WRITE_COMMANDS.UPDATE_MONEY_REQUEST_BILLABLE]: Parameters.UpdateMoneyRequestParams;
    [WRITE_COMMANDS.UPDATE_MONEY_REQUEST_TAG]: Parameters.UpdateMoneyRequestParams;
    [WRITE_COMMANDS.UPDATE_MONEY_REQUEST_DISTANCE]: Parameters.UpdateMoneyRequestParams;
    [WRITE_COMMANDS.UPDATE_MONEY_REQUEST_CATEGORY]: Parameters.UpdateMoneyRequestParams;
    [WRITE_COMMANDS.UPDATE_MONEY_REQUEST_DESCRIPTION]: Parameters.UpdateMoneyRequestParams;
    [WRITE_COMMANDS.HOLD_MONEY_REQUEST]: Parameters.HoldMoneyRequestParams;
    [WRITE_COMMANDS.UNHOLD_MONEY_REQUEST]: Parameters.UnHoldMoneyRequestParams;
    [WRITE_COMMANDS.UPDATE_DISTANCE_REQUEST]: Parameters.UpdateMoneyRequestParams;
    [WRITE_COMMANDS.UPDATE_MONEY_REQUEST_AMOUNT_AND_CURRENCY]: Parameters.UpdateMoneyRequestParams;
    [WRITE_COMMANDS.REQUEST_MONEY]: Parameters.RequestMoneyParams;
    [WRITE_COMMANDS.SPLIT_BILL]: Parameters.SplitBillParams;
    [WRITE_COMMANDS.SPLIT_BILL_AND_OPEN_REPORT]: Parameters.SplitBillParams;
    [WRITE_COMMANDS.DELETE_MONEY_REQUEST]: Parameters.DeleteMoneyRequestParams;
    [WRITE_COMMANDS.CREATE_DISTANCE_REQUEST]: Parameters.CreateDistanceRequestParams;
    [WRITE_COMMANDS.START_SPLIT_BILL]: Parameters.StartSplitBillParams;
    [WRITE_COMMANDS.SEND_MONEY_ELSEWHERE]: Parameters.SendMoneyParams;
    [WRITE_COMMANDS.SEND_MONEY_WITH_WALLET]: Parameters.SendMoneyParams;
    [WRITE_COMMANDS.APPROVE_MONEY_REQUEST]: Parameters.ApproveMoneyRequestParams;
    [WRITE_COMMANDS.EDIT_MONEY_REQUEST]: Parameters.EditMoneyRequestParams;
    [WRITE_COMMANDS.REPLACE_RECEIPT]: Parameters.ReplaceReceiptParams;
    [WRITE_COMMANDS.SUBMIT_REPORT]: Parameters.SubmitReportParams;
    [WRITE_COMMANDS.DETACH_RECEIPT]: Parameters.DetachReceiptParams;
    [WRITE_COMMANDS.PAY_MONEY_REQUEST_WITH_WALLET]: Parameters.PayMoneyRequestParams;
    [WRITE_COMMANDS.PAY_MONEY_REQUEST]: Parameters.PayMoneyRequestParams;
    [WRITE_COMMANDS.CANCEL_PAYMENT]: Parameters.CancelPaymentParams;
    [WRITE_COMMANDS.ACCEPT_ACH_CONTRACT_FOR_BANK_ACCOUNT]: Parameters.AcceptACHContractForBankAccount;
    [WRITE_COMMANDS.UPDATE_WORKSPACE_DESCRIPTION]: Parameters.UpdateWorkspaceDescriptionParams;
    [WRITE_COMMANDS.SET_WORKSPACE_AUTO_REPORTING]: Parameters.SetWorkspaceAutoReportingParams;
    [WRITE_COMMANDS.SET_WORKSPACE_AUTO_REPORTING_FREQUENCY]: Parameters.SetWorkspaceAutoReportingFrequencyParams;
    [WRITE_COMMANDS.SET_WORKSPACE_AUTO_REPORTING_MONTHLY_OFFSET]: Parameters.SetWorkspaceAutoReportingMonthlyOffsetParams;
    [WRITE_COMMANDS.SET_WORKSPACE_APPROVAL_MODE]: Parameters.SetWorkspaceApprovalModeParams;
    [WRITE_COMMANDS.SET_WORKSPACE_PAYER]: Parameters.SetWorkspacePayerParams;
    [WRITE_COMMANDS.SET_WORKSPACE_REIMBURSEMENT]: Parameters.SetWorkspaceReimbursementParams;
    [WRITE_COMMANDS.SWITCH_TO_OLD_DOT]: Parameters.SwitchToOldDotParams;
    [WRITE_COMMANDS.ENABLE_POLICY_CATEGORIES]: Parameters.EnablePolicyCategoriesParams;
    [WRITE_COMMANDS.ENABLE_POLICY_CONNECTIONS]: Parameters.EnablePolicyConnectionsParams;
    [WRITE_COMMANDS.ENABLE_POLICY_DISTANCE_RATES]: Parameters.EnablePolicyDistanceRatesParams;
    [WRITE_COMMANDS.ENABLE_POLICY_TAGS]: Parameters.EnablePolicyTagsParams;
    [WRITE_COMMANDS.ENABLE_POLICY_TAXES]: Parameters.EnablePolicyTaxesParams;
    [WRITE_COMMANDS.ENABLE_POLICY_WORKFLOWS]: Parameters.EnablePolicyWorkflowsParams;
    [WRITE_COMMANDS.ENABLE_POLICY_REPORT_FIELDS]: Parameters.EnablePolicyReportFieldsParams;
    [WRITE_COMMANDS.JOIN_POLICY_VIA_INVITE_LINK]: Parameters.JoinPolicyInviteLinkParams;
    [WRITE_COMMANDS.ACCEPT_JOIN_REQUEST]: Parameters.AcceptJoinRequestParams;
    [WRITE_COMMANDS.DECLINE_JOIN_REQUEST]: Parameters.DeclineJoinRequestParams;
    [WRITE_COMMANDS.CREATE_POLICY_DISTANCE_RATE]: Parameters.CreatePolicyDistanceRateParams;
};

const READ_COMMANDS = {
    OPEN_REIMBURSEMENT_ACCOUNT_PAGE: 'OpenReimbursementAccountPage',
    OPEN_WORKSPACE_VIEW: 'OpenWorkspaceView',
    GET_MAPBOX_ACCESS_TOKEN: 'GetMapboxAccessToken',
    OPEN_PAYMENTS_PAGE: 'OpenPaymentsPage',
    OPEN_PERSONAL_DETAILS: 'OpenPersonalDetailsPage',
    OPEN_PUBLIC_PROFILE_PAGE: 'OpenPublicProfilePage',
    OPEN_PLAID_BANK_LOGIN: 'OpenPlaidBankLogin',
    OPEN_PLAID_BANK_ACCOUNT_SELECTOR: 'OpenPlaidBankAccountSelector',
    GET_OLDER_ACTIONS: 'GetOlderActions',
    GET_NEWER_ACTIONS: 'GetNewerActions',
    EXPAND_URL_PREVIEW: 'ExpandURLPreview',
    GET_REPORT_PRIVATE_NOTE: 'GetReportPrivateNote',
    OPEN_ROOM_MEMBERS_PAGE: 'OpenRoomMembersPage',
    SEARCH_FOR_REPORTS: 'SearchForReports',
    SEND_PERFORMANCE_TIMING: 'SendPerformanceTiming',
    GET_ROUTE: 'GetRoute',
    GET_ROUTE_FOR_DRAFT: 'GetRouteForDraft',
    GET_STATEMENT_PDF: 'GetStatementPDF',
    OPEN_ONFIDO_FLOW: 'OpenOnfidoFlow',
    OPEN_INITIAL_SETTINGS_PAGE: 'OpenInitialSettingsPage',
    OPEN_ENABLE_PAYMENTS_PAGE: 'OpenEnablePaymentsPage',
    BEGIN_SIGNIN: 'BeginSignIn',
    SIGN_IN_WITH_SHORT_LIVED_AUTH_TOKEN: 'SignInWithShortLivedAuthToken',
    SIGN_IN_WITH_SUPPORT_AUTH_TOKEN: 'SignInWithSupportAuthToken',
    OPEN_WORKSPACE_REIMBURSE_VIEW: 'OpenWorkspaceReimburseView',
    OPEN_WORKSPACE: 'OpenWorkspace',
    OPEN_WORKSPACE_MEMBERS_PAGE: 'OpenWorkspaceMembersPage',
    OPEN_POLICY_CATEGORIES_PAGE: 'OpenPolicyCategoriesPage',
    OPEN_POLICY_TAGS_PAGE: 'OpenPolicyTagsPage',
    OPEN_POLICY_TAXES_PAGE: 'OpenPolicyTaxesPage',
    OPEN_WORKSPACE_INVITE_PAGE: 'OpenWorkspaceInvitePage',
    OPEN_DRAFT_WORKSPACE_REQUEST: 'OpenDraftWorkspaceRequest',
    OPEN_POLICY_WORKFLOWS_PAGE: 'OpenPolicyWorkflowsPage',
    OPEN_POLICY_DISTANCE_RATES_PAGE: 'OpenPolicyDistanceRatesPage',
    OPEN_POLICY_MORE_FEATURES_PAGE: 'OpenPolicyMoreFeaturesPage',
} as const;

type ReadCommand = ValueOf<typeof READ_COMMANDS>;

type ReadCommandParameters = {
    [READ_COMMANDS.OPEN_REIMBURSEMENT_ACCOUNT_PAGE]: Parameters.OpenReimbursementAccountPageParams;
    [READ_COMMANDS.OPEN_WORKSPACE_VIEW]: Parameters.OpenWorkspaceViewParams;
    [READ_COMMANDS.GET_MAPBOX_ACCESS_TOKEN]: EmptyObject;
    [READ_COMMANDS.OPEN_PAYMENTS_PAGE]: EmptyObject;
    [READ_COMMANDS.OPEN_PERSONAL_DETAILS]: EmptyObject;
    [READ_COMMANDS.OPEN_PUBLIC_PROFILE_PAGE]: Parameters.OpenPublicProfilePageParams;
    [READ_COMMANDS.OPEN_PLAID_BANK_LOGIN]: Parameters.OpenPlaidBankLoginParams;
    [READ_COMMANDS.OPEN_PLAID_BANK_ACCOUNT_SELECTOR]: Parameters.OpenPlaidBankAccountSelectorParams;
    [READ_COMMANDS.GET_OLDER_ACTIONS]: Parameters.GetOlderActionsParams;
    [READ_COMMANDS.GET_NEWER_ACTIONS]: Parameters.GetNewerActionsParams;
    [READ_COMMANDS.EXPAND_URL_PREVIEW]: Parameters.ExpandURLPreviewParams;
    [READ_COMMANDS.GET_REPORT_PRIVATE_NOTE]: Parameters.GetReportPrivateNoteParams;
    [READ_COMMANDS.OPEN_ROOM_MEMBERS_PAGE]: Parameters.OpenRoomMembersPageParams;
    [READ_COMMANDS.SEARCH_FOR_REPORTS]: Parameters.SearchForReportsParams;
    [READ_COMMANDS.SEND_PERFORMANCE_TIMING]: Parameters.SendPerformanceTimingParams;
    [READ_COMMANDS.GET_ROUTE]: Parameters.GetRouteParams;
    [READ_COMMANDS.GET_ROUTE_FOR_DRAFT]: Parameters.GetRouteForDraftParams;
    [READ_COMMANDS.GET_STATEMENT_PDF]: Parameters.GetStatementPDFParams;
    [READ_COMMANDS.OPEN_ONFIDO_FLOW]: EmptyObject;
    [READ_COMMANDS.OPEN_INITIAL_SETTINGS_PAGE]: EmptyObject;
    [READ_COMMANDS.OPEN_ENABLE_PAYMENTS_PAGE]: EmptyObject;
    [READ_COMMANDS.BEGIN_SIGNIN]: Parameters.BeginSignInParams;
    [READ_COMMANDS.SIGN_IN_WITH_SHORT_LIVED_AUTH_TOKEN]: Parameters.SignInWithShortLivedAuthTokenParams;
    [READ_COMMANDS.SIGN_IN_WITH_SUPPORT_AUTH_TOKEN]: Parameters.SignInWithSupportAuthTokenParams;
    [READ_COMMANDS.OPEN_WORKSPACE_REIMBURSE_VIEW]: Parameters.OpenWorkspaceReimburseViewParams;
    [READ_COMMANDS.OPEN_WORKSPACE]: Parameters.OpenWorkspaceParams;
    [READ_COMMANDS.OPEN_WORKSPACE_MEMBERS_PAGE]: Parameters.OpenWorkspaceMembersPageParams;
    [READ_COMMANDS.OPEN_POLICY_CATEGORIES_PAGE]: Parameters.OpenPolicyCategoriesPageParams;
    [READ_COMMANDS.OPEN_POLICY_TAGS_PAGE]: Parameters.OpenPolicyTagsPageParams;
    [READ_COMMANDS.OPEN_POLICY_TAXES_PAGE]: Parameters.OpenPolicyTaxesPageParams;
    [READ_COMMANDS.OPEN_WORKSPACE_INVITE_PAGE]: Parameters.OpenWorkspaceInvitePageParams;
    [READ_COMMANDS.OPEN_DRAFT_WORKSPACE_REQUEST]: Parameters.OpenDraftWorkspaceRequestParams;
    [READ_COMMANDS.OPEN_POLICY_WORKFLOWS_PAGE]: Parameters.OpenPolicyWorkflowsPageParams;
    [READ_COMMANDS.OPEN_POLICY_DISTANCE_RATES_PAGE]: Parameters.OpenPolicyDistanceRatesPageParams;
    [READ_COMMANDS.OPEN_POLICY_MORE_FEATURES_PAGE]: Parameters.OpenPolicyMoreFeaturesPageParams;
};

const SIDE_EFFECT_REQUEST_COMMANDS = {
    AUTHENTICATE_PUSHER: 'AuthenticatePusher',
    OPEN_REPORT: 'OpenReport',
    OPEN_OLD_DOT_LINK: 'OpenOldDotLink',
    REVEAL_EXPENSIFY_CARD_DETAILS: 'RevealExpensifyCardDetails',
    GET_MISSING_ONYX_MESSAGES: 'GetMissingOnyxMessages',
    JOIN_POLICY_VIA_INVITE_LINK: 'JoinWorkspaceViaInviteLink',
    RECONNECT_APP: 'ReconnectApp',
} as const;

type SideEffectRequestCommand = ValueOf<typeof SIDE_EFFECT_REQUEST_COMMANDS>;

type SideEffectRequestCommandParameters = {
    [SIDE_EFFECT_REQUEST_COMMANDS.AUTHENTICATE_PUSHER]: Parameters.AuthenticatePusherParams;
    [SIDE_EFFECT_REQUEST_COMMANDS.OPEN_REPORT]: Parameters.OpenReportParams;
    [SIDE_EFFECT_REQUEST_COMMANDS.OPEN_OLD_DOT_LINK]: Parameters.OpenOldDotLinkParams;
    [SIDE_EFFECT_REQUEST_COMMANDS.REVEAL_EXPENSIFY_CARD_DETAILS]: Parameters.RevealExpensifyCardDetailsParams;
    [SIDE_EFFECT_REQUEST_COMMANDS.GET_MISSING_ONYX_MESSAGES]: Parameters.GetMissingOnyxMessagesParams;
    [SIDE_EFFECT_REQUEST_COMMANDS.JOIN_POLICY_VIA_INVITE_LINK]: Parameters.JoinPolicyInviteLinkParams;
    [SIDE_EFFECT_REQUEST_COMMANDS.RECONNECT_APP]: Parameters.ReconnectAppParams;
};

type ApiRequestCommandParameters = WriteCommandParameters & ReadCommandParameters & SideEffectRequestCommandParameters;

export {WRITE_COMMANDS, READ_COMMANDS, SIDE_EFFECT_REQUEST_COMMANDS};

export type {ApiRequest, ApiRequestCommandParameters, WriteCommand, ReadCommand, SideEffectRequestCommand};
