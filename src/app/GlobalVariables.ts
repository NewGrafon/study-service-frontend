export let isLogged: boolean = false;

export let userInfo: IUserSchema = {
  firstname: null,
  lastname: null,
  email: null,
  accountType: 0,
  created: null
};

export function UpdateUser(newInfo: IUserSchema, _isLogged: boolean) {
  isLogged = _isLogged;
  userInfo = {
    firstname: newInfo.firstname,
    lastname: newInfo.lastname,
    email: newInfo.email,
    accountType: newInfo.accountType,
    created: newInfo.created,
  }
}

export interface IUserSchema {
  firstname: string | null,
  lastname: string | null,
  email: string | null,
  accountType: number,
  created: string | null
}

export enum EducatablePeoples {
  Дошкольники = "Дошкольники",
  Школьники_1_4 = "Школьники (1-4 классы)",
  Школьники_5_9 = "Школьники (5-9 классы)",
  Школьники_10_11 = "Школьники (10-11 классы)",
  Студенты = "Студенты"
}

export const underSchoolars: EducatablePeoples[] = [EducatablePeoples.Дошкольники];
export const schoolars: EducatablePeoples[] = [EducatablePeoples.Школьники_1_4, EducatablePeoples.Школьники_5_9, EducatablePeoples.Школьники_10_11];
export const students: EducatablePeoples[] = [EducatablePeoples.Студенты];

export enum StudyWays {
  Математика = "Математика",
  Алгебра = "Алгебра",
  Геометрия = "Геометрия",
  Русский_язык = "Русский язык",
  Английский = "Английский",
  Информатика = "Информатика",
  Физика = "Физика",
  Химия = "Химия",
  География = "География",
  Биология = "Биология",
  Экология = "Экология",
  История = "История",
  Обществознание = "Обществознание",
  Экономика = "Экономика",
  Веб_дизайн = "Веб-дизайн",
}

export const StudyLinks: IStudyLinksElem[] = [
  {
    studyWay: StudyWays.Математика,
    availablePeoples: [
      EducatablePeoples.Дошкольники,
      EducatablePeoples.Школьники_1_4
    ]
  },
  {
    studyWay: StudyWays.Алгебра,
    availablePeoples: [
      EducatablePeoples.Школьники_5_9,
      EducatablePeoples.Школьники_10_11,
    ]
  },
  {
    studyWay: StudyWays.Геометрия,
    availablePeoples: [
      EducatablePeoples.Школьники_5_9,
      EducatablePeoples.Школьники_10_11,
    ]
  },
  {
    studyWay: StudyWays.Русский_язык,
    availablePeoples: [
      EducatablePeoples.Дошкольники,
      EducatablePeoples.Школьники_1_4,
      EducatablePeoples.Школьники_5_9,
      EducatablePeoples.Школьники_10_11,
      EducatablePeoples.Студенты,
    ]
  },
  {
    studyWay: StudyWays.Английский,
    availablePeoples: [
      EducatablePeoples.Дошкольники,
      EducatablePeoples.Школьники_1_4,
      EducatablePeoples.Школьники_5_9,
      EducatablePeoples.Школьники_10_11,
      EducatablePeoples.Студенты,
    ]
  },
  {
    studyWay: StudyWays.Информатика,
    availablePeoples: [
      EducatablePeoples.Школьники_5_9,
      EducatablePeoples.Школьники_10_11,
      EducatablePeoples.Студенты,
    ]
  },
  {
    studyWay: StudyWays.Физика,
    availablePeoples: [
      EducatablePeoples.Школьники_5_9,
      EducatablePeoples.Школьники_10_11,
      EducatablePeoples.Студенты,
    ]
  },
  {
    studyWay: StudyWays.Химия,
    availablePeoples: [
      EducatablePeoples.Школьники_5_9,
      EducatablePeoples.Школьники_10_11,
      EducatablePeoples.Студенты,
    ]
  },
  {
    studyWay: StudyWays.География,
    availablePeoples: [
      EducatablePeoples.Школьники_5_9,
      EducatablePeoples.Школьники_10_11
    ]
  },
  {
    studyWay: StudyWays.Обществознание,
    availablePeoples: [
      EducatablePeoples.Школьники_5_9,
      EducatablePeoples.Школьники_10_11
    ]
  },
  {
    studyWay: StudyWays.Биология,
    availablePeoples: [
      EducatablePeoples.Школьники_5_9,
      EducatablePeoples.Школьники_10_11
    ]
  },
  {
    studyWay: StudyWays.Экология,
    availablePeoples: [
      EducatablePeoples.Школьники_5_9,
      EducatablePeoples.Школьники_10_11
    ]
  },
  {
    studyWay: StudyWays.История,
    availablePeoples: [
      EducatablePeoples.Школьники_5_9,
      EducatablePeoples.Школьники_10_11,
      EducatablePeoples.Студенты
    ]
  },
  {
    studyWay: StudyWays.Экономика,
    availablePeoples: [
      EducatablePeoples.Студенты
    ]
  },
  {
    studyWay: StudyWays.Веб_дизайн,
    availablePeoples: [
      EducatablePeoples.Студенты
    ]
  }
];

export interface IStudyLinksElem {
  studyWay: StudyWays,
  availablePeoples: EducatablePeoples[]
}
